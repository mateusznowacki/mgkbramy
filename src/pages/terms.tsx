import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-12 max-w-3xl text-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nutzungsbedingungen</h1>
      <p className="text-sm text-gray-500 mb-2 text-center">Stand: 04. Juli 2025</p>
      <p className="mb-6">Diese Website wird von Adam Krupa (E-Mail <a href="mailto:mgkmetallzauneauspolen@gmail.com" className="text-green-700 underline">mgkmetallzauneauspolen@gmail.com</a>, Telefon <a href="tel:+4917682184462" className="text-green-700 underline">+49 176 821 844 62</a>) betrieben. Mit dem Aufruf oder der Nutzung der Seiten erkennen Sie die nachfolgenden Bedingungen an. Bitte lesen Sie sie aufmerksam durch, bevor Sie unsere Inhalte verwenden.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Nutzung und Urheberrecht</h2>
      <p className="mb-6">Der Besuch der Website ist kostenfrei und ohne Registrierung möglich. Alle bereitgestellten Texte, Bilder und sonstigen Inhalte unterliegen dem deutschen Urheberrecht oder entsprechenden Schutzrechten. Jegliche Vervielfältigung, Verbreitung oder öffentliche Wiedergabe außerhalb der gesetzlich zulässigen Grenzen bedarf der vorherigen schriftlichen Zustimmung des Rechteinhabers. Zitate sind in üblichem Umfang mit Quellenangabe gestattet.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Haftung</h2>
      <p className="mb-6">Obwohl wir die Informationen auf dieser Website mit größter Sorgfalt zusammenstellen, übernehmen wir keine Gewähr für deren Aktualität, Richtigkeit oder Vollständigkeit. Wir haften für vorsätzlich oder grob fahrlässig verursachte Schäden sowie bei Verletzung des Lebens, des Körpers oder der Gesundheit nach den gesetzlichen Vorschriften. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen; dies gilt insbesondere für mittelbare Schäden, Folgeschäden oder entgangenen Gewinn.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Externe Links</h2>
      <p className="mb-6">Die Seite kann Verknüpfungen zu externen Internetangeboten enthalten. Auf deren Inhalte haben wir keinen Einfluss und machen sie uns nicht zu eigen. Für die dortigen Informationen sind ausschließlich deren Betreiber verantwortlich. Bei Kenntnis von Rechtsverletzungen werden wir entsprechende Links unverzüglich entfernen.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Pflichten der Nutzer</h2>
      <p className="mb-6">Sie verpflichten sich, unsere Website nur im Rahmen der geltenden Gesetze zu nutzen und Handlungen zu unterlassen, die die Sicherheit oder Funktionsfähigkeit der Seite beeinträchtigen könnten. Automatisierte Abfragen sind ohne unsere ausdrückliche Zustimmung untersagt.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Rechtswahl und Gerichtsstand</h2>
      <p className="mb-6">Auf diese Nutzungsbedingungen findet deutsches Recht Anwendung. Für Verbraucher gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Verbraucherschutzvorschriften des Staats eingeschränkt werden, in dem Sie Ihren gewöhnlichen Aufenthalt haben. Soweit gesetzlich zulässig, ist Gerichtsstand für alle Streitigkeiten der Sitz des Verantwortlichen.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Salvatorische Klausel</h2>
      <p>Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Regelungen unberührt. Anstelle der unwirksamen Klausel gilt die gesetzliche Regelung.</p>
    </main>
    <Footer />
  </>
);

export default Terms; 