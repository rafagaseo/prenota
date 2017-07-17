
var calendario = document.querySelectorAll(".calendario tr td");
var confirma = document.querySelector('input[value="Confirmar"]');



for (var i = 0; i < calendario.length; i++) {
    if (calendario[i].className == "calendarCellOpen") {
        notifica();
    }
    else {
        refresh();
    }
}

function notifica() {
    Notification.requestPermission().then(function(result) {
        if (result !== 'granted') {
            Notification.requestPermission();
        }
        else {
            var notification = new Notification('DUPLA CIDADANIA', {
                body: "LIBEROU A DUPLA CORRE!!!!",
            });
            notification;

            if (confirma) {
                confirma.click();
            }
            new Date();
            // window.open('http://www.orangefreesounds.com/wp-content/uploads/2015/07/Police-siren-sound-effect.mp3', "_blank");
        }

    });
}

function refresh() {
    setTimeout(function () {
        location.reload()
    }, 10000);
}
