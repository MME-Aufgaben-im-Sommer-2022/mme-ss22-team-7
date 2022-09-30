# Vorlage für MME-Projekte

Dieses Repository bildet die Grundlage für Ihre Projektarbeit und wurde über die Annahme der _Classroom_-Aufgabe automatisch erstellt. Hinweise zum Aufbau der vorgegebenen Struktur und Hilfswerkzeuge finden Sie im [Dev Guide](./DevGuide.md). **Achten Sie während der Entwicklung stets darauf, dass der Code in Ihrem Repository zu jeder Zeit über `npm run build` fehlerfrei gebaut und veröffentlicht werden kann.**

**Ergänzen Sie im Laufe der Entwicklung die folgenden Punkte in dieser Readme-Datei!**

## Projekt

_Fassen Sie kurz die wichtigsten Features, die intendierte Zielgruppe und die grundlegende Motivation des Projekts zusammen. Nennen Sie die aktuell bereits implementierten Funktionen und verlinken Sie den aktuellsten Release._

Mithilfe der Anwendung können Nutzer ihren CO2-Verbrauch berechnen und sich so besser einschätzen. Zudem soll die Anwendung spielerisch motivieren den eigenen Verbrauch zu verringern.

Die wichtigsten Features bilden zum Einen, die erstellbaren CO2-Einträge und deren visuelle Darstellung auf der Hauptseite, zum Anderen aber auch das Vergleichen von Scores zwischen Freunden. Der Score entsteht durch eine Verrechnung zwischen erstellten Einträgen und erfolgreich absolvierten Challenges.

Die stetig steigende CO2-Emission und deren schlechte Auswirkungen auf die Umwelt, sind ein weitreichendes Problem dieser Gesellschaft. Durch sie wird der Klimawandel beschleunigt und stellt so eine Gefahr für Mensch und Natur dar.
Die Anwendung richtet sich an Menschen allen Alters, denen eine Verbesserung oder auch lediglich das Bewusstsein, des eigenen CO2-Verbrauchs, wichtig ist. Sie sollten durch das Leaderboard und die Challenges motiviert werden, sich stetig neu herauszufordern und zu verbessern. Somit können die Nutzer nicht nur über sich hinaus wachsen, sondern auch dazu beitragen die CO2-Bilanz zu senken.

## Implementierte Funktionen:
- Anmeldung, Registrierung, Erstellen eines Eintrags, Das Anzeigen des CO2-Verbrauchs, anhand eines Grafen, Annehmen von Challenges, Das Bearbeiten von aktiven Challenges, Hinzufügen von Freunden, Die Darstellung der History, Die Darstellung des Leaderboards
Aktueller Release: https://github.com/MME-Aufgaben-im-Sommer-2022/mme-ss22-team-7/releases/tag/v0.1.0

## Beschreibung & Anleitung

_Beschreiben Sie die zentralen Funktionen Ihrer Anwendung und deren Verwendung. Nutzen Sie dazu Screenshots und/oder Videos. Verlinken Sie ein min. 60-sekündiges Demo-Video, das die Verwendung aller wichtigen Funktionen zeigt und in Form eines Audio-Kommentars beschreibt._
--> Screenshots, Video und Audioaufnahme fehlen!!

Die Anwendung startet mit der Möglichkeit, dass der Nutzer sich anmelden kann oder über eine Verlinkung registrieren kann. Hierfür werden Username und Passwort oder Username, Passwort und eine E-Mail Adresse benötigt. Anschließend wird der Nutzer auf die Hauptseite der Greenbook Anwendung geleitet. Diese bietet einen Überblick über die meisten Funktionen, wie der Anzeige des aktuellen Scores, des Leaderboards, des Grafen, der Challenges oder der History.

Von der Hauptseite aus kann der User mithilfe eines Burgermenüs sein Profil öffnen, woduch sein Username, seine ID und seine Freundesliste angezeigt werden. Im Burgermenü besteht außerdem die Möglichkeit neue Freunde per ID zu adden und der Freundesliste hinzuzufügen.

Zurück auf der Hauptseite kann der Nutzer mithilfe des "new Entry"-Buttons ein Popup öffnen. In diesem können verschiedene Angaben zum individuellen CO2-Verbrauch angegeben werden. Mit dem save-Button werden diese mit einem Score verrechnet und aktualisiert.

Der Score wird auf der Hauptseite, als Zahl aber auch als grafische Abbildung dargestellt. Sowohl der Graf des Nutzers, als auch die Grafen der Freunde vom Leaderboards werden hier angezeigt.

Das Leaderboard wird auf der rechten Seite des Hauptbildschirms angezeigt und listet die Freunde mit dem höchsten Score nacheinander auf. 

Im unteren Teil der Hauptseite werden auswählbare Challenges angezeigt. Diese können mithilfe eines Buttons aktiviert und somit in ein Feld darüber verschoben werden. Die aktivierten Challenges zeigen den Fortschritt an, können aber auch abgebrochen oder abgeschlossen werden.

So kann der Score mithilfe von neuen Einträgen mit negativen Werten und durch das erfolgreiche abschließen von Challenges mit positiven Wertem verrechnet werden. Ein Verlauf von absolvierten Challenges und erstellten Einträgen wird in der History angezeigt. Auch hier hat der Nutzer die Möglichkeit diese zu löschen. 

## Anmerkungen zum Projekt
Über Google Chrome und Safari wird die Anwendung richtig skaliert angezeigt. Bei Firefox können diesbezüglich Probleme auftreten.

## Team

_Listen Sie tabelarisch alle Teammitglieder mit Name, E-Mail-Adresse und Foto auf. Halten Sie für jedes Mitglied kurz fest, welchen Teilbereich der Anwendung die jeweilige Person maßgeblich bearbeitet hat._



Name | E-Mail-Adresse | Github-Nutzer | Foto | Komponenten der Anwendung
--- | --- | --- | --- | ---
Benedikt Boehlke | benedikt.boehlke@stud.uni-regensburg.de | Beneboehlke | ![Profilbild Benedikt B](https://user-images.githubusercontent.com/69862866/193319121-75b981dd-8045-4902-a33b-91fa0bd1f579.JPG) | Challenges, Popup, Profil, Layout
Natalie Röhrle | natalie.roehrle@stud.uni-regensburg.de | NaCesca | ![Profilbild Natalie R](https://user-images.githubusercontent.com/69862866/193300953-9921a989-57e6-46c8-b7e1-40bf7ab8b859.jpeg) | Layouts, Entries, Score, Repository
Florian Feist | florian.feist@stud.uni-regensburg.de | FeistFlo | ![Profilbild Florian F](https://user-images.githubusercontent.com/69862866/193308492-fbfad382-d304-484f-a33d-7c8cdb7cbd1d.jpeg) | Haupt-Layout, Entries, Popup, Impressum
Johannes Klein | johannes.klein@stud.uni-regensburg.de | johnnyklein | ![Profilbild Johannes K] | Datenbank, Challenges, History
