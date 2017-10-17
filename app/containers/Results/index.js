/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import SignupBox from 'components/SignupBox';
import SignInBox from 'components/SignInBox';
import WouldYouLike from 'components/WouldYouLike';
import './style.css';
import './styleM.css';


export default class Results extends React.PureComponent {
  render() {
    return (
      <div className="container resultsBackground">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>


        <main>

          <section className="resultsBanner">
            <h1>
              Search Results
            </h1>
            <p>
              The following investment products have been curated with your goals in mind.
            </p>
            <p>
              Use the filters below to further refine your results.
            </p>
          </section>

          <section>
            <div className="resultsFilters">
              <div className="feesFilter">
                <img src={require("../../photos/results-fees.svg")}/>
                <select>
                  <option value="" disabled selected>Fees & Expenses</option>
                  <option value="1">High to Low</option>
                  <option value="2">Low to High</option>
                </select>
              </div>
              <div className="performanceFilter">
                <img src={require("../../photos/results-performance.svg")}/>
                <select>
                  <option value="" disabled selected>Performance</option>
                    <option value="1">High to Low</option>
                    <option value="2">Low to High</option>
                </select>
              </div>
              <div className="specialOffersFilter">
                <img src={require("../../photos/results-specials.svg")}/>
                <select>
                  <option value="" disabled selected>Special Offers</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="locationFilter">
                <img src={require("../../photos/results-location.svg")}/>
                <select>
                  <option value="" disabled selected>Physical Location</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </section>

        <section>
          <div className="resultsBox">
            <div className="result">
              <div className="resultLogo">
                <a href="https://www.vanguard.com" target="_blank">
                    <img className="logoImage" src={require("../../photos/results-vanguard.jpg")} alt="Vanguard Logo" title="Visit Website"/>
                </a>
              </div>
              <div className="imageInfoBuffer">
              <div className="companyAndProductTitle"></div>
                <h2>Vanguard - Index Fund</h2>
              <div className="resultProductInfo"></div>
              <span className="resultProuctFont">Risk Level: Moderate | Performance: 6.78% | Fees & Expenses: 2.45% | Minimum Investment: $1 | Special Offers: No | Physical Location: No</span>
              <div className="resultDescription"></div>
                <p>
                  The fund seeks to achieve its investment objective by investing primarily in affiliated Schwab exchange-traded funds (ETFs). It has a policy to invest, under normal circumstances, at least 80% of its assets (net assets, plus the amount of any borrowings for investment purposes) in underlying funds that are managed to seek investment returns that track particular market indices. The fund is managed based on the specific retirement date (target date) included in its name and assumes a retirement age of 65.
                </p>
            </div>
          </div>

          <div className="result">
            <div className="resultLogo">
              <a href="https://www.vanguard.com" target="_blank">
                  <img className="logoImage" src={require("../../photos/results-charles.png")} alt="Vanguard Logo"/>
              </a>
            </div>
            <div className="imageInfoBuffer">
            <div className="companyAndProductTitle"></div>
              <h2>Charles Schwab - Retirement Fund</h2>
            <div className="resultProductInfo"></div>
            <span className="resultProuctFont">Risk Level: Moderate | Performance: 6.78% | Fees & Expenses: 2.45% | Minimum Investment: $1 | Special Offers: No | Physical Location: No</span>
            <div className="resultDescription"></div>
              <p>
                The fund seeks to achieve its investment objective by investing primarily in affiliated Schwab exchange-traded funds (ETFs). It has a policy to invest, under normal circumstances, at least 80% of its assets (net assets, plus the amount of any borrowings for investment purposes) in underlying funds that are managed to seek investment returns that track particular market indices. The fund is managed based on the specific retirement date (target date) included in its name and assumes a retirement age of 65.
              </p>
          </div>
        </div>

        <div className="result">
          <div className="resultLogo">
            <a href="https://www.vanguard.com" target="_blank">
                <img className="logoImage" src={require("../../photos/results-ameritrade.jpg")} alt="Vanguard Logo"/>
            </a>
          </div>
          <div className="imageInfoBuffer">
          <div className="companyAndProductTitle"></div>
            <h2>Ameritrade - College Fund</h2>
          <div className="resultProductInfo"></div>
          <span className="resultProuctFont">Risk Level: Moderate | Performance: 6.78% | Fees & Expenses: 2.45% | Minimum Investment: $1 | Special Offers: No | Physical Location: No</span>
          <div className="resultDescription"></div>
            <p>
              The fund seeks to achieve its investment objective by investing primarily in affiliated Schwab exchange-traded funds (ETFs). It has a policy to invest, under normal circumstances, at least 80% of its assets (net assets, plus the amount of any borrowings for investment purposes) in underlying funds that are managed to seek investment returns that track particular market indices. The fund is managed based on the specific retirement date (target date) included in its name and assumes a retirement age of 65.
            </p>
        </div>
      </div>

      <div className="result">
        <div className="resultLogo">
          <a href="https://www.vanguard.com" target="_blank">
              <img className="logoImage" src={require("../../photos/results-voya.jpg")} alt="Vanguard Logo"/>
          </a>
        </div>
        <div>
        <div className="companyAndProductTitle"></div>
          <h2>Voya - Target Index Fund</h2>
        <div className="resultProductInfo"></div>
        <span className="resultProuctFont">Risk Level: Moderate | Performance: 6.78% | Fees & Expenses: 2.45% | Minimum Investment: $1 | Special Offers: No | Physical Location: No</span>
        <div className="resultDescription"></div>
          <p>
            The fund seeks to achieve its investment objective by investing primarily in affiliated Schwab exchange-traded funds (ETFs). It has a policy to invest, under normal circumstances, at least 80% of its assets (net assets, plus the amount of any borrowings for investment purposes) in underlying funds that are managed to seek investment returns that track particular market indices. The fund is managed based on the specific retirement date (target date) included in its name and assumes a retirement age of 65.
          </p>
      </div>
    </div>
          </div>
        </section>

      </main>
    </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
