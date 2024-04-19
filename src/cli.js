import readlineSync from 'readline-sync';

const greting = () => {
    return readlineSync.question('May I have your name? ');
};

export default greting;
