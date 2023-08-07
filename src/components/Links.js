import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export const Links = () => {
    return (
        <section className="social-links" id="links">
            <h2>
                Links
            </h2>
            <div className="footer-icon">
                <a href='https://www.linkedin.com/in/arun1504/'>
                    <LinkedInIcon className='icon-links'/>
                </a>
                <a href='https://github.com/aroon1504'>
                    <GitHubIcon className='icon-links'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100017333615352'>
                    <FacebookIcon className='icon-links' />
                </a>
                <a href='https://www.instagram.com/a_r_o_o_n_15/'>
                    <InstagramIcon className='icon-links'/>
                </a>
                <a href='mailto:arunkvai@outlook.com'>
                    <MailOutlineIcon className='icon-links'/>
                </a>
                <a href='tel:+918925053270'>
                    <PhoneIcon className='icon-links'/>
                </a>

            </div>
        </section>
    );
}