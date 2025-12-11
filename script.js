document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const initialScreen = document.getElementById('initial-screen');
    const messageScreen = document.getElementById('message-screen');
    const typingTextElement = document.getElementById('typing-text');

    const fullMessage = `setiap orang ada masanya dan setiap masa ada orangnyaa. aku tau kita ga selamanya bakal terus terusan barengg, aku gatau sampai kita kaya ginii, tapi makasi suda hadir di hidup akuu.

terimakasi Uda temanin aku dari awal kita kenall, terimakasi suda jadi support system terbaik sejauh inii. gimanapun end nya harus terima mau pun senang atau sedihh. aku senang dan beruntung bisa kenal orang kaya kamuu.

i hope we continue to be togetherr, always share stories and become friends foreverr.`;

    let charIndex = 0;
    const typingSpeed = 50; // Kecepatan ketik (milidetik)

    function typeWriter() {
        if (charIndex < fullMessage.length) {
            // Menambahkan karakter ke elemen HTML
            typingTextElement.textContent += fullMessage.charAt(charIndex);
            charIndex++;
            // Menjadwalkan pengetikan karakter berikutnya
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Setelah selesai mengetik, hapus cursor animasi
            typingTextElement.classList.add('finished-typing');
        }
    }

    startButton.addEventListener('click', () => {
        // 1. Sembunyikan layar awal
        initialScreen.classList.add('hidden');
        
        // 2. Tampilkan layar pesan
        messageScreen.classList.remove('hidden');

        // 3. Mulai animasi ketik setelah layar muncul
        // Beri sedikit jeda visual
        setTimeout(() => {
            typeWriter();
        }, 300);
    });
});