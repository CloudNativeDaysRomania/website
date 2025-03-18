import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links.js';

const TITLE = 'Code of Conduct';

const TOP_DESCRIPTION =
  'At Cloud Native Days Romania, we are dedicated to providing a harassment-free experience for all participants. Our Code of Conduct ensures a professional, inclusive, and respectful environment, free from harassment and discrimination. We value open exchange of ideas and expect all attendees to uphold these principles throughout the event.';

const Hero = () => (
  <section>
    <div className="overflow-hidden bg-[#262f53] bg-opacity-5 pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-6xl font-bold leading-normal text-primary-1">{TITLE}</h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-2xl leading-normal">{TOP_DESCRIPTION}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">Expected Behavior</h2>
          <div className="leading-normal text-primary-1">
            <p className=" mt-8 max-w-[1008px] text-lg leading-normal">
              All event participants, whether they are attending an in-person event or a virtual
              event, are expected to behave in accordance with professional standards, with both
              this Code of Conduct as well as their respective employer’s policies governing
              appropriate workplace behavior and applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden bg-[#262f53] bg-opacity-5 pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">Unacceptable Behavior</h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              Harassment will not be tolerated in any form, whether in person or virtually,
              including, but not limited to, harassment based on gender, gender identity and
              expression, sexual orientation, disability, physical appearance, body size, race, age,
              religion or any other status protected by laws in which the conference or program is
              being held. Harassment includes the use of abusive, offensive or degrading language,
              intimidation, stalking, harassing photography or recording, inappropriate physical
              contact, sexual imagery and unwelcome sexual advances or requests for sexual favors.
              Any report of harassment at one of our events, whether in person or virtual, will be
              addressed immediately. Participants asked to stop any harassing behavior are expected
              to comply immediately. Anyone who witnesses or is subjected to unacceptable behavior
              should notify a conference organizer at once.
            </p>

            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              Individuals who participate (or plan to participate) in Cloud Native Days Romania
              events, whether its an in-person event or a virtual event, should conduct themselves
              at all times in a manner that comports with both the letter and spirit of this policy
              prohibiting harassment and abusive behavior, whether before, during or after the
              event. This includes statements made in social media postings, on-line publications,
              text messages, and all other forms of electronic communication.
            </p>

            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              Speakers should not use sexual language, images, or any language or images that would
              constitute harassment as defined above in their talks. Exhibitor booths serve as a
              platform for presenting businesses and/or projects and should maintain a professional
              and inclusive presence; therefore, the use of sexualized images, activities,
              materials, or attire, including costumes and uniforms that contribute to a sexualized
              environment, is strictly prohibited. Additionally, booths must not be utilized for
              political campaigning or promoting political causes, including the display or
              engagement in activities or materials that support such endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">
            Consequences of Unacceptable Behavior
          </h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              If a participant engages in harassing behavior, whether in person or virtually, the
              conference organizers may take any action they deem appropriate depending on the
              circumstances, ranging from issuance of a warning to the offending individual to
              expulsion from the conference with no refund. Cloud Native Days Romania reserves the
              right to exclude any participant found to be engaging in harassing behavior from
              participating in any further Cloud Native Days Romania events, trainings or other
              activities.
            </p>
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              If a participant (or individual wishing to participate in a Cloud Native Days Romania
              event, in-person and/or virtual), through postings on social media or other online
              publications or another form of electronic communication, engages in conduct that
              violates this policy, whether before, during or after a Cloud Native Days Romania
              event, Cloud Native Days Romania may take appropriate corrective action, which could
              include imposing a temporary or permanent ban on an individual’s participation in
              future Cloud Native Days Romania events.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden bg-[#262f53] bg-opacity-5 pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">
            What To Do If You Witness or Are Subject To Unacceptable Behavior
          </h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              If you are being harassed, notice that someone else is being harassed, or have any
              other concerns relating to harassment, please contact a member of the conference staff
              immediately. You are also encouraged to contact Vlad Fratila, General Manager of Event
              at{' '}
              <Link {...LINKS.emailVladFratila}>
                <u>vlad.fratila@gmail.com</u>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">Incident Response</h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              Our staff has taken incident response training and responds to harassment reports
              quickly and thoroughly. As referenced above, if a participant engages in harassing
              behavior, whether in-person or virtually, the conference organizers may take any
              action they deem appropriate, ranging from issuance of a warning to the offending
              individual to expulsion from the conference with no refund, depending on the
              circumstances. Cloud Native Days Romania reserves the right to exclude any participant
              found to be engaging in harassing behavior from participating in any further Cloud
              Native Days Romania events, trainings or other activities.
            </p>
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              Conference staff will also provide support to victims, including, but not limited to:
              <ul className="ml-8 mt-4 list-disc">
                <li>Providing an Escort</li>
                <li>Contacting Hotel/Venue Security or Local Law Enforcement</li>
                <li>Briefing Key Event Staff For Response/Victim Assistance</li>
                <li>
                  And otherwise assisting those experiencing harassment to ensure that they feel
                  safe for the duration of the conference.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden bg-[#262f53] bg-opacity-5 pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">Health and Safety Requirements</h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              It is necessary for all attendees to cooperate and protect one another. For this
              reason, Cloud Native Days Romania’s events may have health and safety requirements
              (the “Health and Safety Requirements”). The specific requirements may vary from event
              to event, and will be communicated in writing prior to and during the event.
            </p>

            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              If an attendee fails to comply with any of the Health and Safety Requirements, Cloud
              Native Days Romania may (but is not obligated to) take appropriate corrective action,
              which could include immediate removal from the event and venue without a refund,
              and/or imposing a temporary or permanent ban on an individual’s participation in
              future Cloud Native Days Romania events.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden pb-10 pt-12">
      <div className="container relative mt-4 text-center text-primary-1">
        <div className="container text-left">
          <h2 className="text-4xl leading-normal text-primary-1">Pre-Event Concerns</h2>
          <div className="leading-normal text-primary-1">
            <p className="mt-8 max-w-[1008px] text-lg leading-normal">
              If you are planning to attend an upcoming event, whether in-person or virtually and
              have concerns regarding another individual who may be present, please contact Vlad
              Fratila (
              <Link {...LINKS.emailVladFratila}>
                <u>vlad.fratila@gmail.com</u>
              </Link>
              ). Precautions will be taken to ensure your comfort and safety, including, but not
              limited to providing an escort, prepping onsite event staff, keeping victim and
              harasser from attending the same talks/social events and providing onsite contact cell
              phone numbers for immediate contact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
