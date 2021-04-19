import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Welcome to JobSquirrel!',
    paragraph: 'Here youll find all of the useful tools as an employer on JobSquirrel. Use the tabs at the top of the page or the links below to access tools.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="EjobPost">
                    Post A Job
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="employerProfile">
                    My Profile
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="myJobsPosted">
                    My Posted Jobs
                    </Button>
                   
        </ButtonGroup>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Start Posting
                  </div>
                <h3 className="mt-0 mb-12">
                  Get Your Job Posted!
                  </h3>
                <p className="m-0">
                  Access the job posting page to post your new job for students in the area to see and sign up for
                  </p>
                  <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="EjobPost">
                    Post A Job
                    </Button>
                  </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../../assets/images/jobPost.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Keep Track of Jobs
                  </div>
                <h3 className="mt-0 mb-12">
                  View Your Posted Jobs
                  </h3>
                <p className="m-0">
                   You can view the jobs that you currently have posted by clicking the button below or by navigating to the tab at the top. It is important to keep track of what you have posted and prevent posting double jobs. Unless it is marked as completed, a job will remain 'live'. 
                  </p>
                  <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/myJobsPosted">
                    My Posted Jobs
                    </Button>
                  </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../../assets/images/postedjobs.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Feedback
                  </div>
                <h3 className="mt-0 mb-12">
                Your Reviews Are Important!
                  </h3>
                <p className="m-0">
                  Please take a mintue to complete our JobSquirrel Survey! Tell us what you think about the service and howe you think we could improve to better serve you! Click on the link below to access the survey. JobSquirrel thanks you for your feedback!
                  </p>
                  <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://dh3kcwujsy3.typeform.com/to/Vev44fmU">
                    Take Survey
                    </Button>
                  </ButtonGroup>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../../assets/images/survey.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;