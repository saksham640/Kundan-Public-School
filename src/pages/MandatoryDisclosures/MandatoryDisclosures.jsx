import React from 'react';
import Nav from '../../components/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './MandatoryDisclosures.module.css';

const MandatoryDisclosures = () => {
    return (
        <div>
            <Nav />
                <h2 className={styles.heading}>Mandatory Disclosures</h2>
            <div className={styles.container}>
                <div className={styles.tableWrapper}>
                    <div className={styles.flexTable}>
                        <div className={`${styles.flexRow} ${styles.header}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber} ${styles.center} ${styles.bold}`}>SL NO.</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} >INFORMATION</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} style={{border:"none"}}>DETAILS</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>1</div>
                            <div className={styles.flexCell}>NAME OF THE SCHOOL</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>2</div>
                            <div className={styles.flexCell}>AFFILIATION NO.(IF APPLICABLE)</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>3</div>
                            <div className={styles.flexCell}>SCHOOL CODE (IF APPLICABLE)</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>4</div>
                            <div className={styles.flexCell}>COMPLETE ADDRESS WITH PIN CODE</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>5</div>
                            <div className={styles.flexCell}>PRINCIPAL NAME</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>6</div>
                            <div className={styles.flexCell}>PRINCIPAL QUALIFICATION</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>7</div>
                            <div className={styles.flexCell}>SCHOOL EMAIL ID</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>8</div>
                            <div className={styles.flexCell}>CONTACT DETAILS (LANDLINE/MOBILE)</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={styles.tableWrapper}>
                    <div className={styles.flexTable}>
                        <div className={`${styles.flexRow} ${styles.header}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber} ${styles.center} ${styles.bold}`}>SL NO.</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`}>DOCUMENTS/INFORMATION</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} style={{border:"none"}}>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>1</div>
                            <div className={styles.flexCell}>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>2</div>
                            <div className={styles.flexCell}>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>3</div>
                            <div className={styles.flexCell}>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>4</div>
                            <div className={styles.flexCell}>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>5</div>
                            <div className={styles.flexCell}>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>6</div>
                            <div className={styles.flexCell}>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>7</div>
                            <div className={styles.flexCell}>COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>8</div>
                            <div className={styles.flexCell}>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={styles.tableWrapper}>
                    <div className={styles.flexTable}>
                        <div className={`${styles.flexRow} ${styles.header}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber} ${styles.center} ${styles.bold}`}>SL NO.</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`}>DOCUMENTS/INFORMATION</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} style={{border:"none"}}>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>1</div>
                            <div className={styles.flexCell}>FEE STRUCTURE OF THE SCHOOL</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>2</div>
                            <div className={styles.flexCell}>ANNUAL ACADEMIC CALENDER</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>3</div>
                            <div className={styles.flexCell}>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>4</div>
                            <div className={styles.flexCell}>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>5</div>
                            <div className={styles.flexCell}>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={styles.tableWrapper}>
                    <div className={styles.flexTable}>
                        <div className={`${styles.flexRow} ${styles.header}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber} ${styles.center} ${styles.bold}`}>SL NO.</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`}>INFORMATION</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} style={{border:"none"}}>DETAILS</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>1</div>
                            <div className={styles.flexCell}>PRINCIPAL</div>
                            <div className={styles.flexCell} style={{border:"none"}}>Mr. HARNEET SINGH</div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>2</div>
                            <div className={styles.flexCell}>TOTAL NO. OF TEACHERS</div>
                            <div className={styles.flexCell} style={{border:"none"}}>
                                <div>17</div>
                                <div>PGT: 0</div>
                                <div>TGT: 5</div>
                                <div>PRT: 12</div>
                            </div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>3</div>
                            <div className={styles.flexCell}>TEACHERS SECTION RATIO</div>
                            <div className={styles.flexCell} style={{border:"none"}}>1.5:1</div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>4</div>
                            <div className={styles.flexCell}>DETAILS OF SPECIAL EDUCATOR</div>
                            <div className={styles.flexCell} style={{border:"none"}}>Mr. Sanket Karkhanis (M.A. Counselling)</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>5</div>
                            <div className={styles.flexCell}>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</div>
                            <div className={styles.flexCell} style={{border:"none"}}>Ms. Inderbir Kaur (M. Sc. Psychology)</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tableWrapper}>
                    <div className={styles.flexTable}>
                        <div className={`${styles.flexRow} ${styles.header}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber} ${styles.center} ${styles.bold}`}>SL NO.</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`}>INFORMATION</div>
                            <div className={`${styles.flexCell} ${styles.center} ${styles.bold}`} style={{border:"none"}}>DETAILS</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>1</div>
                            <div className={styles.flexCell}>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</div>
                            <div className={styles.flexCell} style={{border:"none"}}>6058.76</div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>2</div>
                            <div className={styles.flexCell}>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</div>
                            <div className={styles.flexCell} style={{border:"none"}}>21 & 47</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>3</div>
                            <div className={styles.flexCell}>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</div>
                            <div className={styles.flexCell} style={{border:"none"}}>2 & 69</div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>4</div>
                            <div className={styles.flexCell}>INTERNET FACILITY</div>
                            <div className={styles.flexCell} style={{border:"none"}}>YES</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>5</div>
                            <div className={styles.flexCell}>NO. OF GIRLS TOILETS</div>
                            <div className={styles.flexCell} style={{border:"none"}}>10</div>
                        </div>
                        <div className={`${styles.flexRow} ${styles.alternateRow}`}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>6</div>
                            <div className={styles.flexCell}>NO. OF BOYS TOILETS</div>
                            <div className={styles.flexCell} style={{border:"none"}}>4</div>
                        </div>
                        <div className={styles.flexRow}>
                            <div className={`${styles.flexCell} ${styles.serialNumber}`}>7</div>
                            <div className={styles.flexCell}>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</div>
                            <div className={styles.flexCell} style={{border:"none"}}></div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
            <br/>
            <Footer />
        </div>
    );
};

export default MandatoryDisclosures;