import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import sJobBoard from '../../../views/SjobBoard.jsx';
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
    title: 'Student Dashboard',
    paragraph: 'This is the students dashboard. You can find all of the useful information here on how to use JobSquirrel as well as get to the different pages through the different tabs and buttons provided!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container">
      <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="sJobBoard">
                    Job Board
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="studentProfile">
                    My Profile
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="SjobsToDo">
                    My Jobs In Progress
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="FAQ">
                    Feedback
                    </Button>
        </ButtonGroup>
      </div>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Get to Work!
                  </div>
                <h3 className="mt-0 mb-12">
                  Job Board
                  </h3>
                <p className="m-0">
                  Visit the job board tab at the top of the page to view current jobs in the area and pick the one that most interests you! You can choose any job you like, as long as you are qualified for it, but make sure you complete it!
                  </p>
                  <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="sJobBoard">
                    View the Board
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
                  src={require('../../../assets/images/jobBoardScreenshot.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} 
                  
                  //onClick={sJobBoard}
                  />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Earn some money!
                  </div>
                <h3 className="mt-0 mb-12">
                  Complete Your Jobs!
                  </h3>
                <p className="m-0">
                  It is very important to complete jobs that you have signed up for. Not completing jobs can give you a bad reputation in the area for not being a reputable helper! Always complete jobs that you have signed up for or ask the employer if it would be ok to cancel or reschedule the job.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../../assets/images/sql.jpg')}
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
                  Please take a minute to complete the JobSquirrel survey and let us know what you think about our service! Thank You!
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