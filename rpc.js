const RPC = require('discord-rpc');
const clientId = '1267175374798716928';

const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('Discord RPC is now on!')

    rpc.setActivity({
        details: 'Editing an image',
        state: 'Using Paint.net',
        startTimestamp: new Date(),
        largeImageKey: 'https://static.wikia.nocookie.net/logopedia/images/4/4e/Paint.NET_2014_Icon.png/revision/latest?cb=20220510141516',
        largeImageText: 'Paint.NET',
        smallImageKey: 'https://static.wikia.nocookie.net/logopedia/images/4/4e/Paint.NET_2014_Icon.png/revision/latest?cb=20220510141516',
        smallImageText: 'Editing',
    });

    console.log('Rich Presence updated');
});

rpc.login({ clientId }).catch(console.error);