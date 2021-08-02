import React from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../TopBanner';

function LandingPageGuest() {
    return(
            <div>
              <TopBanner />
                
                    <div className="section">
                        <div className="containers">
                            <div className="row">
                                <div className="col m2-12 text-center">
                                    <h3 className="main-heading">eTranzact</h3>
                                    <div className="underline mx-auto">weee</div>
                                    <p>
                                        Welcome to eTranzact A home of posibilities
                                        <Link to="/login"></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                        
                    </div>
            </div>
    )
}

export default LandingPageGuest