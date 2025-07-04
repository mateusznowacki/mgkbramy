import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-12 max-w-3xl text-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Datenschutzerklärung</h1>
      <p className="text-sm text-gray-500 mb-2 text-center">Stand: 04. Juli 2025</p>
      <p className="mb-6">Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir beim Besuch unserer Website und bei einer Kontaktaufnahme erheben, wie wir sie nutzen und welche Rechte Ihnen als betroffene Person zustehen. Grundlage für alle Verarbeitungen ist die Datenschutz-Grundverordnung (DSGVO), das Bundesdatenschutzgesetz (BDSG) sowie – soweit anwendbar – das Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG).</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Verantwortlicher</h2>
      <p className="mb-6">im Sinne des Art. 4 Nr. 7 DSGVO ist Adam Krupa. Sie erreichen uns per E-Mail unter <a href="mailto:mgkmetallzauneauspolen@gmail.com" className="text-green-700 underline">mgkmetallzauneauspolen@gmail.com</a> oder telefonisch unter <a href="tel:+4917682184462" className="text-green-700 underline">+49 176 821 844 62</a>.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Datenverarbeitung beim Besuch der Website</h2>
      <p className="mb-6">Beim <strong>rein informatorischen Besuch</strong> unserer Website übermittelt Ihr Browser automatisch Daten an unseren Server. Hierzu gehören insbesondere IP-Adresse, Datum und Uhrzeit der Anfrage, abgerufene Datei, übertragene Datenmenge, Herkunfts-URL, Browser-Typ und -Version sowie Betriebssystem. Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen und die Systemsicherheit zu gewährleisten; sie werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet und spätestens nach sieben Tagen automatisch gelöscht.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Kontaktaufnahme</h2>
      <p className="mb-6">Sofern Sie <strong>Kontakt</strong> mit uns aufnehmen, verarbeiten wir die von Ihnen mitgeteilten Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer sowie den Inhalt Ihrer Nachricht) ausschließlich zur Bearbeitung Ihres Anliegens. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern es um die Anbahnung oder Erfüllung eines Vertrags geht, andernfalls Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse besteht darin, Anfragen effizient zu beantworten.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-6">Unsere Website verwendet <strong>ausschließlich technisch notwendige Cookies</strong>, die für den Betrieb und die Darstellung der Seite unerlässlich sind. Diese Cookies enthalten keine personenbezogenen Daten und werden nach Ende Ihrer Sitzung gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO i. V. m. § 25 Abs. 2 Nr. 2 TTDSG.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Weitergabe und Übermittlung</h2>
      <p className="mb-6">Eine <strong>Weitergabe</strong> Ihrer Daten an Dritte oder eine <strong>Übermittlung in Drittstaaten</strong> erfolgt nicht, sofern nicht ausdrücklich anders angegeben oder gesetzlich vorgeschrieben.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Ihre Rechte</h2>
      <p className="mb-6">Sie haben gemäß Art. 15 bis 21 DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem steht Ihnen das Recht zu, sich bei einer Datenschutzaufsichtsbehörde – insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes – zu beschweren.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Kontakt zum Datenschutz</h2>
      <p>Für Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte können Sie sich jederzeit über die oben genannten Kontaktdaten an uns wenden.</p>
    </main>
    <Footer />
  </>
);

export default Privacy; 