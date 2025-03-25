import React from 'react';
import Nav from '../../components/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { NavLink } from 'react-router-dom';

// Define the DownloadButton component
const DownloadButton = ({ link }) => (
    <button onClick={() => window.open(link)}
        style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
       <b>Download</b>
    </button>
);

const Resources = () => {

    const data = [
        { class: 'Nursery', bookList: 'https://drive.google.com/file/d/1EU0gBVKBGpADVmaUiT484CNkepGwGU6n/view?usp=sharing' },
        { class: 'LKG', bookList: '' },
        { class: 'UKG', bookList: 'https://drive.google.com/file/d/1EIPwXw93KB0d5Y3DrSsgHaqoq9zhxzhK/view?usp=sharing' },
        { class: 'Class I', bookList: 'https://drive.google.com/file/d/1Ek_GgJBty3oXBMoTmBZ9a5TYhBrq-kkG/view?usp=sharing' },
        { class: 'Class II', bookList: 'https://drive.google.com/file/d/1EsFMnDInJTpll5YrxKYXezxW8hmlhwO3/view?usp=sharing' },
        { class: 'Class III', bookList: 'https://drive.google.com/file/d/1EszH-6Ozik7ZGa0_OjxDq_cTVaxjElj7/view?usp=sharing' },
        { class: 'Class IV', bookList: 'https://drive.google.com/file/d/1EyMVkHaS05uK1bnW9EKlFMX-avV8ybhW/view?usp=sharing' },
        { class: 'Class V', bookList: 'https://drive.google.com/file/d/1F0ZZlHYMONUGr60ImMW4-Uj-2hJRZ45D/view?usp=sharing' },
    ];

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <Nav />
            <h1 style={{ textAlign: 'center', color: '#000080' }}>Resources Page</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid transparent' }}>
                    <div style={{ flex: 1, padding: '8px', border: '1px solid #000', fontSize: '16px', fontWeight: 'bold' }}>Class</div>
                    <div style={{ flex: 1, padding: '8px', border: '1px solid #000', fontSize: '16px', fontWeight: 'bold' }}>Book List</div>
                </div>
                {data.map((row, index) => (
                    <div key={index} style={{ display: 'flex', borderBottom: '1px solid transparent', backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                        <div style={{ flex: 1, padding: '8px', border: '1px solid transparent' }}>{row.class}</div>
                        <div style={{ flex: 1, padding: '8px', border: '1px solid transparent' }}>
                            <DownloadButton link={`${row.bookList}`} />
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <Footer />
        </div>
    );
};

export default Resources;