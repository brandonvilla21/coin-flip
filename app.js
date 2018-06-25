function flip() {
    return Math.random() >= 0.5;
}

function generateBinary( size ) {
    let binary = '';
    for (let i = 0; i < size; i ++) {
        binary += flip() ? '1' : '0';
    }
    return binary;
}

function randomNumber( n ) {
    
    // Validation
    if ( !(n > 0 && n < 1000000) )
        throw new Error('Invalid input');
    
    // binarySize will obtain the number of digits required
    let binarySize = 1;

    let k = 1;
    
    // Loops until k finds the correct number of
    // digits to generate a binary random number
    while( true ) {
        k = k * 2;
        if ( k >= n )
            break;
        binarySize ++;
    }
    
    // Loops until generate a valid random number
    while( true ) {
        const random = parseInt( generateBinary(binarySize), 2 );
        if ( random < n )
            return random;
    }

}
