import React, { Component } from 'react';
import { fetchProjects, fetchLogEntries } from '../../api';
import { Container, Grid } from '../../ui';
import { initIntersecObserver, withDelay } from '../../helpers';
import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';
import './ProjectLogsPage.css';

const OBSERVER_CONFIG = {
  root: document.querySelector('.log-table'),
  rootMargin: '0px',
  threshold: 0,
};

class ProjectLogsPage extends Component {
  currentLog = null;
  offset = 0;
  observer = null;

  state = {
    projects: [],
    logEntries: [],
    loading: false,
  }

  componentDidMount () {
    fetchProjects().then(res => {
      this.setState({ projects: res.applications });
    });
  }

  handleLogClick = item => {
    if (item === this.currentLog) {
      return;
    }

    this.currentLog = item;
    
    this.resetEntries();

    this.loadLogEntries(this.currentLog);
  };

  resetEntries () {
    this.offset = 0;
    this.observer = null;
    this.setState({ loading: true, logEntries: [] });
  }

  loadLogEntries (log) {
    if (log !== this.currentLog) {
      return;
    }

    withDelay(500).then(() => {
      fetchLogEntries(log, this.offset).then(res => {
        const loading = res.entries.length > 0;
        
        this.setState(prev => ({
          logEntries: [...prev.logEntries, ...res.entries],
          loading,
        }), () => {
          if (loading) {
            this.offset = res.next_offset;
            this.initLoadingObserver();
          }
        });
      });
    });
  }

  initLoadingObserver () {
    this.observer = initIntersecObserver(
      OBSERVER_CONFIG,
      () => {
        this.observer.disconnect();

        return this.loadLogEntries(this.currentLog);
      }
    );

    this.observer.observe(document.querySelector('.log-table__loader'));
  }

  render () {
    const { projects, logEntries, loading } = this.state;

    return (
      <Container className="project-logs-page">
        <Grid>
          <Grid.Row>
            <Grid.Column
              width="20"
            >
              <LeftSideBar
                projects={projects}
                onLogClick={this.handleLogClick}
              />
            </Grid.Column>

            <Grid.Column>
              <MainContent
                logEntries={logEntries}
                loading={loading}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default ProjectLogsPage;
