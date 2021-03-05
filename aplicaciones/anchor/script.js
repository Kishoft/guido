let aElements = document.getElementsByTagName("a");

let observador = new IntersectionObserver(changes => {
    console.log(changes)
    changes.forEach(change => {
        if (change.isIntersecting) {
            for (const a of aElements) {
                let link = a.hash.slice(1)
                if (link === change.target.id) {
                    a.style.background = "orangered"
                }
            }
        }
        else {
            for (const a of aElements) {
                let link = a.hash.slice(1)
                if (link === change.target.id) {
                    a.style.background = "transparent"
                }
            }
        }
    });
}, { threshold: 0.5 });

for (let a of aElements) {

    let elementoAnclado = document.getElementById(a.hash.slice(1))

    observador.observe(elementoAnclado)
};