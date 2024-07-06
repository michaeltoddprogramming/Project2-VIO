if (!!window.SharedWorker) {
        var myWorker = new SharedWorker('musicWorker.js');
        myWorker.port.start();
    } else {
        console.log('Your browser does not support Shared Workers.');
}