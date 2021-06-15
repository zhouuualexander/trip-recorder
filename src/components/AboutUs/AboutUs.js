import React from 'react';
import Typography from '@material-ui/core/Typography';
const aboutUs = () => {
    return (
        <React.Fragment>
            <Typography variant="h3" align="center" style={{
                fontFamily: 'Kaushan Script',

                marginTop: '3vh'
            }}>
                About Us
            </Typography>
            <Typography variant="h4" style={{
                fontFamily: 'Roboto',
                marginTop: '3vh'

            }}>
                What Is An About Us Page?
                An About Us Page is a page on your website that tells your readers all about you. It includes a detailed description covering all aspects of your business and you as an entrepreneur. This can include the products or services you are offering, how you came into being as a business, your mission and vision, your aim, and maybe something about your future goals too. Your About Us page is your perfect opportunity to tell a compelling story about your business.

                Even though an About Us page is one of the most important elements of a website, it is often one of the most overlooked elements. Compared to a landing page, an About Us page help you communicate a range of things:

                The story of your brand and why you started it.
                The cause or customers that your business serves.
                Your business model or how your products are sourced/manufactured.
            </Typography>
        </React.Fragment>
    );
};

export default aboutUs;