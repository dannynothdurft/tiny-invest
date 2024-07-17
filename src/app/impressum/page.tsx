/* 
  Datei: /impressum/page.jsx
  Version: 1.0.0
  Entwickler: Danny Nothdurft
  Beschreibung: Dieses Modul enthält den Impressum der Shop-Anwendung.
*/

"use client";
import Config from "@/config/config.json";

function Impressum() {
  return (
    <div className="impressum--container">
      <h1>Impressum</h1>

      <div>
        <p>{Config.site.title}</p>
        <p>
          {Config.street} {Config.streeNumber}
        </p>
        <p>
          {Config.plz} {Config.city}
        </p>
        <p>E-Mail: {Config.email}</p>
        <p>Telefon: {Config.tel}</p>
      </div>

      <div>
        <p>Geschäftsführung: {Config.ceo}</p>
      </div>
    </div>
  );
}

export default Impressum;
