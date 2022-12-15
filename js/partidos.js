            // ***************** PARTIDOS ************************* //

const arrowRight1 = document.getElementById(`arrowRight1`);
const arrowLeft1 = document.getElementById(`arrowLeft1`);
const arrowRight2 = document.getElementById(`arrowRight2`);
const arrowLeft2 = document.getElementById(`arrowLeft2`);
const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

arrowRight1.addEventListener('click', () => {
    frame1.setAttribute('style', 'display:none;');
    frame2.setAttribute('style', 'display:block;');
}
)

arrowLeft2.addEventListener('click', () => {
    frame1.setAttribute('style', 'display:block;');
    frame2.setAttribute('style', 'display:none;');
}
)