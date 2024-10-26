document.getElementById("horoscope-form").addEventListener("submit", async function(event) {
        event.preventDefault(); 
        
        const sign = document.getElementById("sign").value;

        try {
            const response = await fetch("https://aztro.sameerkumar.website/?sign=" + sign + "&day=today", {
                method: "POST"
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

          const data = await response.json();

            document.getElementById("horoscope-result").innerHTML = `
                <h2>Horóscopo para ${sign}</h2>
                <p><strong>Descripción:</strong> ${data.description}</p>
                <p><strong>Compatibilidad:</strong> ${data.compatibility}</p>
                <p><strong>Estado de ánimo:</strong> ${data.mood}</p>
                <p><strong>Color:</strong> ${data.color}</p>
            `;
        } catch (error) {
            console.error("Error:", error);
            document.getElementById("horoscope-result").innerHTML = "<p>Hubo un error al obtener el horóscopo.</p>";
        }
    });
