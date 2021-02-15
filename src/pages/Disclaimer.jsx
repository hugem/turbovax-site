import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import StatusTable from "./../components/StatusTable";

export default function Disclaimer() {
  return (
    <div>
      <Typography>Last updated: February 14, 2021</Typography>
      <br />
      <Typography variant="h5">Interpretation and Definitions</Typography>
      <br />
      <br />
      <Typography variant="h6">Interpretation</Typography>
      <Typography>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.{" "}
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Definitions</Typography>
      <Typography>For the purposes of this Disclaimer:</Typography>
      <ul>
        <li>
          <Typography>
            <strong>Company</strong> (referred to as either &quot;the
            Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
            this Disclaimer) refers to TurboVax.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Service</strong> refers to the Website.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>You</strong> means the individual accessing the Service, or
            the company, or other legal entity on behalf of which such
            individual is accessing or using the Service, as applicable.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Website</strong> refers to TurboVax, accessible from{" "}
            <a
              href="https://www.turbovax.info/"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://www.turbovax.info/
            </a>
          </Typography>
        </li>
      </ul>
      <br />
      <br />
      <Typography variant="h5">Disclaimer</Typography>
      <Typography>
        The information contained on the Service is for general information
        purposes only.
      </Typography>
      <Typography>
        The Company assumes no responsibility for errors or omissions in the
        contents of the Service.
      </Typography>
      <br />
      <Typography>
        In no event shall the Company be liable for any special, direct,
        indirect, consequential, or incidental damages or any damages
        whatsoever, whether in an action of contract, negligence or other tort,
        arising out of or in connection with the use of the Service or the
        contents of the Service. The Company reserves the right to make
        additions, deletions, or modifications to the contents on the Service at
        any time without prior notice. This Disclaimer has been created with the
        help of the{" "}
        <a
          href="https://www.termsfeed.com/disclaimer-generator/"
          target="_blank"
        >
          Disclaimer Generator
        </a>
        .
      </Typography>
      <br />
      <Typography>
        The content of the Service does not constitute any form of
        recommendation or medical advice.
      </Typography>
      <br />
      <Typography>
        The Company does not warrant that the Service is free of viruses or
        other harmful components.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">External Links Disclaimer</Typography>
      <br />
      <Typography>
        The Service may contain links to external websites that are not provided
        or maintained by or in any way affiliated with the Company.
      </Typography>
      <br />
      <Typography>
        Please note that the Company does not guarantee the accuracy, relevance,
        timeliness, or completeness of any information on these external
        websites.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">Errors and Omissions Disclaimer</Typography>
      <br />
      <Typography>
        The information given by the Service is for general guidance on matters
        of interest only. Even if the Company takes every precaution to insure
        that the content of the Service is both current and accurate, errors can
        occur. Plus, given the changing nature of laws, rules and regulations,
        there may be delays, omissions or inaccuracies in the information
        contained on the Service.
      </Typography>
      <br />
      <Typography>
        The Company is not responsible for any errors or omissions, or for the
        results obtained from the use of this information.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">Fair Use Disclaimer</Typography>
      <Typography>
        The Company may use copyrighted material which has not always been
        specifically authorized by the copyright owner. The Company is making
        such material available for criticism, comment, news reporting,
        teaching, scholarship, or research.
      </Typography>
      <br />
      <Typography>
        The Company believes this constitutes a &quot;fair use&quot; of any such
        copyrighted material as provided for in section 107 of the United States
        Copyright law.
      </Typography>
      <br />
      <Typography>
        If You wish to use copyrighted material from the Service for your own
        purposes that go beyond fair use, You must obtain permission from the
        copyright owner.
      </Typography>
      <br />
      <br />
      <Typography>
        Comments published by users are their sole responsibility and the users
        will take full responsibility, liability and blame for any libel or
        litigation that results from something written in or as a direct result
        of something written in a comment. The Company is not liable for any
        comment published by users and reserve the right to delete any comment
        for any reason whatsoever.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">No Responsibility Disclaimer</Typography>
      <br />
      <Typography>
        The information on the Service is provided with the understanding that
        the Company is not herein engaged in rendering legal, accounting, tax,
        or other professional advice and services. As such, it should not be
        used as a substitute for consultation with professional accounting, tax,
        legal or other competent advisers.
      </Typography>
      <br />
      <Typography>
        In no event shall the Company or its suppliers be liable for any
        special, incidental, indirect, or consequential damages whatsoever
        arising out of or in connection with your access or use or inability to
        access or use the Service.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">
        &quot;Use at Your Own Risk&quot; Disclaimer
      </Typography>
      <br />
      <Typography>
        All information in the Service is provided &quot;as is&quot;, with no
        guarantee of completeness, accuracy, timeliness or of the results
        obtained from the use of this information, and without warranty of any
        kind, express or implied, including, but not limited to warranties of
        performance, merchantability and fitness for a particular purpose.
      </Typography>
      <br />
      <Typography>
        The Company will not be liable to You or anyone else for any decision
        made or action taken in reliance on the information given by the Service
        or for any consequential, special or similar damages, even if advised of
        the possibility of such damages.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">Contact Us</Typography>
      <Typography>
        If you have any questions about this Disclaimer, You can contact Us by
        email: huge@turbovax.info
      </Typography>
    </div>
  );
}
