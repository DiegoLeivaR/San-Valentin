let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

// --- PASO 1: Creamos una función para no repetir código ---
// Esta función contiene todo lo que pasa cuando aceptan
function decirQueSi() {
    // Ocultar gifs tristes y mostrar el feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar botones
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar mensaje
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Ya lo sabía, te amo!!❤️❤️❤️ jajaja';

    // Secuencia de Gifs felices
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
}

// --- PASO 2: El botón SÍ original usa la función ---
document.getElementById('siBtn').addEventListener('click', function() {
    decirQueSi();
});

// --- PASO 3: Lógica del botón NO ---
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Are you sure?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
            
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Are you really sure?!';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
            document.getElementById('noBtn').innerHTML = 'Are you really really sure, ¿eh?';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
            document.getElementById('noBtn').innerHTML = "It's by Julia, right? (I already knew jajajjaja)";
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;

        case 4:
            document.getElementById('noBtn').innerHTML = 'Say yes, pleaaaaaase?';
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;

        case 5:
            document.getElementById('noBtn').innerHTML = 'Just think about it';
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;

        case 6:
            document.getElementById('noBtn').innerHTML = "If you say no, I'll be very sad";
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;

        case 7:
            document.getElementById('noBtn').innerHTML = 'I will be very sadd';
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;

        case 8:
            document.getElementById('noBtn').innerHTML = 'I will be very very very sad';
            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
        
            noButtonState++;
            break;

        case 9:
            document.getElementById('noBtn').innerHTML = "Okay, I'll stop asking...";
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;

        case 10:
            document.getElementById('noBtn').innerHTML = 'Just kidding, PLEASE SAY YES';
            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 11:
            document.getElementById('noBtn').innerHTML = "You're breaking my heart :(";
            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 12:
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si';
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 13:
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
          
            noButtonState++;
            break;
        
        // --- AQUÍ ESTÁ EL CAMBIO IMPORTANTE ---
        case 14:
            // Convertimos el botón "No" en un botón "Sí"
            document.getElementById('noBtn').innerHTML = 'SÍ ❤️';
            document.getElementById('noBtn').style.backgroundColor = '#4CAF50'; // Color verde igual que el Sí
            
            // Opcional: Ocultamos el otro botón gigante de Sí para que quede limpio
            document.getElementById('siBtn').style.display = 'none';
            
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';

            // Avanzamos al estado final
            noButtonState = 15;
            break;
        
        // --- ESTADO FINAL: SI LE DAN CLICK AL BOTÓN TRANSFORMADO ---
        case 15:
            decirQueSi();
            break;

        default:
            break;
    }
});
