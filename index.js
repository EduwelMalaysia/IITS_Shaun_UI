const Parse = require('parse/node');

Parse.initialize("ndNELVonLI9FoPW4VOTLwfk12iae1idqJU8LqYO0", "hQCJHbFmCxDBWi5pGsGTv2USUjRdtgoyKmoekJIR");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function saveNewPlayer() {
    const player = new Parse.Object('Player');
    player.set('name', 'Alex');
    player.set('yearOfBirth', 1997);
    player.set('emailContact', 'alex@email.com');
    player.set('attributes', ['fast', 'good endurance']);
    
    try {
        const result = await player.save();
        console.log('New object created with ID:', result.id);
    } catch (error) {
        console.error('Failed to save object:', error.message);
    }
}

saveNewPlayer()