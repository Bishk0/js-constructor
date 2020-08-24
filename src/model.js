import img from './assets/tumblr_ph7j2aNzQe1s49f4m_1280.jpg';
import {TitleBlock, TextBlock, ColumnBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Constructor web sites', {
        tag: 'h2',
        styles: 'background: darkred; color: #fff;'
    }),
    new TextBlock('Aperiam asperiores beatae corporis dicta dolorem, dolores eius exercitationem expedita illum ipsum maxime minus\n' +
        '    molestiae, molestias nesciunt nobis non odit possimus, voluptate. Beatae iste magnam necessitatibus officia quo!\n' +
        '    Amet, saepe.', {
        styles: 'background: darkblue; color: #fff;'
    }),
    new ColumnBlock(['Aperiam asperiores beatae corporis dicta dolorem, dolores eius exercitationem expedita illum ipsum maxime minus\n' +
    '    molestiae, molestias nesciunt nobis non odit possimus, voluptate. Beatae iste magnam necessitatibus officia quo!\n' +
    '    Amet, saepe.', 'Aperiam asperiores beatae corporis dicta dolorem, dolores eius exercitationem expedita illum ipsum maxime minus\n' +
    '    molestiae, molestias nesciunt nobis non odit possimus, voluptate. Beatae iste magnam necessitatibus officia quo!\n' +
    '    Amet, saepe.', 'Aperiam asperiores beatae corporis dicta dolorem, dolores eius exercitationem expedita illum ipsum maxime minus\n' +
    '    molestiae, molestias nesciunt nobis non odit possimus, voluptate. Beatae iste magnam necessitatibus officia quo!\n' +
    '    Amet, saepe.'], {
        styles: 'padding: 1rem;'
    }),
    new ImageBlock(img, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'image',
        imageStyles: 'width: 500px; height: auto;'
    }),
];