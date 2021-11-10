const LABEL1 = `For more information on blade and hilts materials, balancing and more, see our <a href="/#about">FAQ</a>.`

const swordLabel2 = (
  leather = true
) => `What can you choose or modify when ordering this weapon?
    <ol>
      <li>Blade type and length. The standard and maximum length of the blades is 70 cm. They can be shortened by request.</li>
      <li>The colour of the metallic shade of the hilt and blade. The hilt can be steel, graphite or brass. The blade can be steel or graphite. The pommel may have a different colour than the crossguard.</li>
      ${
        leather
          ? `<li>Leather grip type and colour. Either classic leather grip or deluxe version. The colour can be either brown, black or red.</li>`
          : ''
      }
      <li>Fiberglass core. The sword can have either a round 10mm or rectangular 15x6mm core. We also offer a heavier and stronger 16x8mm core. Suitable for Czech hard „kekel“ battles.</li>
    </ol>`

const maceDescription = (
  type
) => `<p>A mace is a blunt weapon, a type of club that uses a heavy head usually made of brass, bronze, iron, or steel on the end of a wooden or metallic handle to deliver powerful strikes. The mace was popular for close combat, especially during the medieval period.</p>
<p>The force of a blow from a mace is large enough to cause damage without penetrating the armor. Because they were simple and cheap to make, these types of weapons were common among peasant rebels and conscript armies. The maces of foot soldiers were usually quite short, while those of cavalrymen were longer and better suited for blows delivered from horseback.</p>
<p>The "${type}" Mace is another in a series of crushing all-foam weapons that we produce.<br>
The shaft has a 18 cm steel tube cast on a round core in handle for better controllability and balance of the weapon.</p>`

const scabbardDescription = (
  belts,
  decoration
) => `<p>Now you can order scabbards with a belt for our one-handed swords. The scabbard consists of an extremely durable PP plastic core, which is covered in cow leather with a metal chape. The scabbard includes a sword belt with a brass buckle.<br>When ordering, you can choose the type and color of the scabbard and belt with straps, then the metal chape, the shape of the brass buckle and possibly your own decorative motif under the leather.</p>
<ul>
    <li>This scabbard can be combined with <b><u>belts ${belts}</u></b>.</li>
    <li>The type of brass buckles (1-4), chapes (steel, brass) and leather color of scabbard and sword belt (brown, black, red, yellow, green) can be combined completely freely.</li>
    ${
      decoration
        ? `<li>The simple decorative motif under the leather must have a size of 6x6 cm and can be used for this scabbard (+300 CZK).</li>`
        : ''
    }
    <li>Before ordering, it is necessary to measure the waist circumference, due to the holes in the belt. Measure yourself in clothes or armor to which you will wear the scabbard.</li>
    <li>The end of the belt is normally in the triangle shape, but we can leave it unfinished square if you would like to put your own belt end on it.</li>
    <li><b>Scabbards can only be ordered with swords. We do not sell them alone!</b></li>
</ul>
<p>A typical fb messenger order of a scabbard should therefore look like this:
<i>"I'd like a red scabbard IV and a brown belt C with a buckle 2 and a brass chape. I have a waist circumference of 98 cm. I'm right-handed"</i></p>
<p>Do not hesitate to contact us with any questions or ideas.</p>
`

export const categories = [
  {
    id: 'swords',
    label: 'Double-edged swords',
    items: [
      {
        id: 'one-handed-sword-coin',
        title: 'One-handed sword - Coin',
        description: 'One-handed sword - Coin, 2300 CZK',
        longDescription: `The simple design of this hilt is based on the popular one-handed swords of the 14th century. The curved ends of the crossguard and the coin-shaped pommel are typical features of this knight's weapon. Oakeshott in his typology refers to this type of pommel with the letter J and we call this hilt simply – Coin.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 680 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}`,
        price: 2500,
        images: [
          { src: 'mince_uzka', width: 1920, height: 1280 },
          { src: 'mince_combo', width: 1920, height: 1280 },
          { src: 'pochva7', width: 1920, height: 1280 },
          { src: 'mince_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-octagon',
        title: 'One-handed sword - Octagon',
        description: 'One-handed sword - Octagon, 2600 CZK',
        longDescription: `We present you our new one-handed sword, type-fitting into the 14th and 15th centuries. Oakeshott refers to this octagonal head as type I1. The handle on this model is also octagonal. The hilt is shaped with an emphasis on detail. It is one of our more magnificent swords suitable for a noble warrior or knight.
          <br><br><b>
          Specifications<br>
          Total lenght: 88 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 660 g<br>
          Point of Balance: 9 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}
          `,
        price: 2600,
        images: [
          { src: 'oktagon', width: 1920, height: 1280 },
          { src: 'oktagon_2', width: 1920, height: 1280 },
          { src: 'oktagon_3', width: 1920, height: 1280 },
          { src: 'oktagon4', width: 1920, height: 1164 },
          { src: 'octagon', width: 1600, height: 1066, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-pear',
        title: 'One-handed sword - Pear',
        description: 'One-handed sword - Pear, 2500 CZK',
        longDescription: `This one-handed arming sword is the first weapon we have ever made years ago and we are very satisfied with this simple and durable hilt design. A strong straight crossguard, and a massive pear-shaped hexagonal pommel with longer grip give this sword shorter Point of balance. Very good sword for 18x6 core and fans of harder battles.
          <br><br><b>
          Specifications<br>
          Total lenght: 90 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 700 g<br>
          Point of Balance: 7.5 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}`,
        price: 2500,
        images: [
          { src: 'hruska_uzka', width: 1920, height: 1280 },
          { src: 'hruska_combo', width: 1920, height: 1280 },
          { src: 'pochva2', width: 1920, height: 1280 },
          { src: 'hruska_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-fishtail',
        title: 'One-handed sword - Fishtail',
        description: 'One-handed sword - Fishtail, 2600 CZK',
        longDescription: `Weapons from the 15th century inspired us for this sword hilt. Oakeshott refers to this type of pommel with the letter V and is commonly referred to as a fishtail. An exciting feature of this model is a hexagonal handle with a very pleasant grip. It is one of our more magnificent swords suitable for a noble warrior or knight.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}`,
        price: 2600,
        images: [
          { src: 'ryba', width: 1920, height: 1280 },
          { src: 'ryba2', width: 1920, height: 1280 },
          { src: 'ryba3', width: 1920, height: 1280 },
          { src: 'ryba4', width: 1920, height: 1280 },
          { src: 'ryba_1', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-doge',
        title: 'One-handed sword – Doge',
        description: 'One-handed sword – Doge, 2600 CZK',
        longDescription: `Our Doge sword is based on surviving examples from 15th century with the Doge museum in Venice. Its curved guard with finger protector is common on swords form this area of Europe, and the distinctive-shaped pommel sets it apart from other medieval and renaissance swords. We've also made a new narrower 4,5cm double-edged blade for this sword to make it easier to use the finger-ring on the guard.
          <br><br><b>
          Specifications<br>
          Total lenght: 88 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4.5 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}`,
        price: 2600,
        images: [
          { src: 'doge_ocel_nova_uvodka', width: 1920, height: 731 },
          { src: 'doge_combo_zlata_tmava', width: 1920, height: 1280 },
          { src: 'doge_pochva', width: 1920, height: 1280 },
          { src: 'doge_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'vikingsword-h',
        title: 'One-handed sword - Viking type H',
        description: 'One-handed sword - Viking type H, 2500 CZK',
        longDescription: `This sword belongs to Petersen's type H. Due to the number of found historical pieces, it is the most numerous of all types of swords from the time of the Vikings. Of the more than 200 weapons found, less than a quarter had a single-edged blade. That's why we decided to offer this version also. Good, simple sword for every nordic warrior.
          <br><br><b>
          Specifications<br>
          Total lenght: 86 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 640 g<br>
          Point of Balance: 11 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}
          `,
        price: 2500,
        images: [
          { src: 'viking_1', width: 1920, height: 1280 },
          { src: 'viking_1', width: 1920, height: 1280 },
          { src: 'viking_2', width: 1920, height: 1280 },
          { src: 'viking_h_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'vikingsword-e',
        title: 'One-handed sword - Viking type E',
        description: 'One-handed sword - Viking type E, 2500 CZK',
        longDescription: `During manufacture of this sword from the 10th century, we tried our best to stick to the preserved finding. It is a weapon found in 1874 in Gnezdov, Russia. The sword belongs to Petersen's type E, which was very popular in the Viking world and today we find it in Sweden, Norway, Finland, Russia, Estonia and Ireland. Great sword for a noble nordic warrior.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 690 g<br>
          Point of Balance: 9.5 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}
          `,
        price: 2500,
        images: [
          { src: 'viking', width: 1920, height: 1280 },
          { src: 'viking_combo', width: 1920, height: 1280 },
          { src: 'viking_detail', width: 1920, height: 1280, fill: true },
        ],
      },
    ],
  },
  {
    id: 'messers',
    label: 'Single-edged swords',
    items: [
      {
        id: 'one-handed-sword-falchion',
        title: 'One-handed sword – Falchion',
        description: 'One-handed sword – Falchion, 2500 CZK',
        longDescription: `During the production we were mainly inspired by the so-called "Thorpe falchion", found in England in the bed of the river Yare near the town of Thorpe St. Andrew. The sword is usually dated to the beginning of the 14th century. The ideal secondary weapon with single-edged blade for every archer or spearman.
          <br><br><b>
          Specifications<br>
          Total lenght: 80 cm<br>
          Blade lenght: 64 cm<br>
          Blade width: 4 cm<br>
          Weight: 600 g<br>
          Point of Balance: 9 cm<br>
          </b><br>${swordLabel2()}<br>${LABEL1}`,
        price: 2500,
        images: [
          { src: 'falchion_1', width: 1920, height: 1280 },
          { src: 'falchion_combo', width: 1920, height: 1280 },
          { src: 'Falchion_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-langmesser',
        title: 'One-handed sword – Langmesser',
        description: 'One-handed sword – Langmesser, 2500 CZK',
        longDescription: `This sword is inspired by the classic shape of German Grosse Messers we can see in fencing manuals of 15th and 16th centuries. A typical feature of this hilt is a wooden knife handle as well as a lug on the outside of the crossguard that protects the knuckles of the hand. A great and effective single-edged bladed weapon for all common soldiers.
          <br><br><b>
          Specifications<br>
          Total lenght: 88 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${swordLabel2(false)}<br>${LABEL1}`,
        price: 2500,
        images: [
          { src: 'messer_1', width: 1920, height: 1280 },
          { src: 'messer_combo', width: 1920, height: 1280 },
          { src: 'messer_3', width: 1920, height: 1280 },
          { src: 'messer_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'one-handed-sword-sabre-briquet',
        title: 'One-handed sabre - Briquet',
        description: 'One-handed sabre - Briquet, 2400 CZK',
        longDescription: `The inspiration for us were the French short infantry sabers "Briquet", which became famous especially during the revolution and the Napoleonic Wars. These small sabers very often had an almost straight single-edged blade, so it was the perfect option for us.
          <br><br><b>
          Specifications<br>
          Total lenght: 85 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4 cm<br>
          Weight: 620 g<br>
          Point of Balance: 16 cm<br>
          </b><br>${swordLabel2(false)}<br>${LABEL1}`,
        price: 2400,
        images: [
          { src: 'savle_1', width: 1920, height: 1280 },
          { src: 'savle_combo', width: 1920, height: 1280 },
          { src: 'savle_detail', width: 1920, height: 1280, fill: true },
        ],
      },
    ],
  },
  {
    id: 'maces',
    label: 'Maces & War hammers',
    items: [
      {
        id: 'mace-bulava',
        title: 'Mace - Bulava',
        description: 'Mace - Bulava, 2000 CZK',
        longDescription: `${maceDescription('Bulava')}
          <br><br><b>
          Specifications<br>
          Total lenght: 70 cm<br>
          Head lenght: 6.5 cm<br>
          Weight: 400 g<br>`,
        price: 2000,
        images: [
          { src: 'palcat_A', width: 1920, height: 1280 },
          { src: 'palcat_A_combo', width: 1920, height: 1280 },
          { src: 'palcat_A_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'mace-zizka',
        title: 'Mace - Zizka',
        description: 'Mace - Zizka, 2000 CZK',
        longDescription: `${maceDescription('Zizka')}
          <br><br><b>
          Specifications<br>
          Total lenght: 70 cm<br>
          Head lenght: 16 cm<br>
          Weight: 400 g<br>`,
        price: 2000,
        images: [
          { src: 'palcat_B', width: 1920, height: 1280 },
          { src: 'palcat_B_combo', width: 1920, height: 1280 },
          { src: 'palcat_B_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'mace-sprinkler',
        title: 'Mace - Sprinkler',
        description: 'Mace - Sprinkler, 2000 CZK',
        longDescription: `${maceDescription('Sprinkler')}
          <br><br><b>
          Specifications<br>
          Total lenght: 70 cm<br>
          Head lenght: 12 cm<br>
          Weight: 400 g<br>`,
        price: 2000,
        images: [
          { src: 'palcat_C', width: 1920, height: 1280 },
          { src: 'palcat_C_combo', width: 1920, height: 1280 },
          { src: 'palcat_C_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'war-hammer',
        title: 'War Hammer',
        description: 'War Hammer, 2000 CZK',
        longDescription: `<p>The War Hammer was a weapon popularized in the late middle ages and mainly used for close combat. War Hammers were a knight’s nightmare because the flat side’s filed edges could make deadly dents in armor, and the spiked side could pierce it. ​</p>
          <p>The all-foam shaft has a 25 cm steel tube cast on a round core in handle for better controllability and balance of the weapon. There is also an attached rubber hose in the hammer head, which in combination with the foam significantly increases the resistance of the weapon.</p>
          <br><br><b>
          Specifications<br>
          Total length: 72 cm<br>
          Head length: 15 cm<br>
          Weight: 570 g<br>`,
        price: 2000,
        images: [
          { src: 'kladivo_2', width: 1920, height: 1280 },
          { src: 'kladivo_combo', width: 1920, height: 1280 },
          { src: 'kladivo_detail', width: 1920, height: 1280, fill: true },
        ],
      },
    ],
  },
  {
    id: 'spears',
    label: 'Polearms',
    items: [
      {
        id: 'spear',
        title: 'Spear',
        description: 'Spear, 1200 CZK',
        longDescription: `<p>Introducing our first polearm - the spear!</p>
          <p>The spearhead can be ordered separately in steel, graphite, and brass color. We also produce the complete weapon in the length of 2 meters with a stained octagonal wooden pole. But only for the Czech customers. We only send spear/pike heads abroad.</p>
          <p>The head is mounted on a wooden pole with an ideal size of 30-32 mm. Before mounting the head, it is necessary to machine the wood and narrow it so that the rubber hose, which reinforces the tip of the spear, fits well on the wooden mandrel at the end of the pole (see picture).</p>
          <p>The blunt tip of the spear has a diameter of 3 cm and the head is partially flexible for greater safety. Flexibility can be ordered in two variants SOFT and HARD.</p>
          <p>For logistical reasons, we do not sell poles longer than 2m. However, we make a deal with <a href="https://www.facebook.com/vyrobadobovehonabytku" target="_blank">@medievalfurniture</a> production that you can order a high-quality composite glued ash poles made on our spear/pike heads. When ordering, just say that you want a pole on a FakeSteel pike or spear and length of the weapon. The price will be 700 CZK for a 3m painted pole with an already modified end for our heads.</p>
          <br><br><b>
          Specifications<br>
          Spearhead length: 37 cm<br>
          Spearhead weight: 260 g<br>`,
        price: 1200,
        images: [
          { src: 'kopi', width: 1920, height: 1280 },
          { src: 'kopi_nakres', width: 1622, height: 1083 },
          { src: 'kopi_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'pike',
        title: 'Pike',
        description: 'Pike, 1000 CZK',
        longDescription: `         
          <p>Due to the lower weight (Pikehead 160g vs Spearhead 260g) it is more suitable for long 3m poles. The head is mounted on a wooden pole with an ideal size of 30-32 mm. Before mounting the head, it is necessary to machine the wood and narrow it so that the rubber hose, which reinforces the tip of the spear, fits well on the wooden mandrel at the end of the pole (see picture).</p>
          <p>The pikehead can be ordered separately in steel, graphite, and brass color. We also produce the complete weapon in the length of 2 meters with a stained octagonal wooden pole. But only for the Czech customers. We only send spear/pike-heads abroad.<br>The blunt tip of the pike has a diameter of 3 cm and the head is partially flexible for greater safety. Flexibility can be ordered in two variants SOFT and HARD.</p>
          <p>For logistical reasons, we do not sell poles longer than 2m. However, we make a deal with <a href="https://www.facebook.com/vyrobadobovehonabytku" target="_blank">@medievalfurniture</a> production that you can order a high-quality composite glued ash poles made on our spear/pike heads. When ordering, just say that you want a pole on a FakeSteel pike or spear and length of the weapon. The price will be 700 CZK for a 3m painted pole with an already modified end for our heads.</p> 
          <br><br><b>
          Specifications<br>
          Spearhead length: 26 cm<br>
          Spearhead weight: 160 g<br>`,
        price: 1000,
        images: [
          { src: 'pika', width: 1920, height: 1280 },
          { src: 'pika_nakres', width: 1933, height: 1289 },
          { src: 'pika_3', width: 1920, height: 1280, fill: true },
        ],
      },
    ],
  },
  {
    id: 'daggers',
    label: 'Medieval daggers',
    items: [
      {
        id: 'baselard-dagger',
        title: 'Baselard dagger',
        description: 'Baselard dagger, 1000 CZK',
        longDescription: `<p>The baselard or "Swiss dagger" is a historical Swiss blade weapon with a crescent-shaped pommel and crossguard. Their curved shapes appeared as early as the 13th century and remained peculiar to Switzerland, and do not appear to have been imitated elsewhere.</p>
          <p>The basic model of the dagger has only a steel rivet on the bottom of the handle. You can also order a version with steel or brass cladding (+300 CZK).<br>The blade can be ordered in a length of 24 or 29 cm. It has a 6 mm round fiberglass core, which ends 6 cm in front of the tip, and for safer stabbing and strengthening of the foam, the end of the core is finished with Kevlar fabric.</p>          
          <br><br><b>
          Specifications<br>
          Total length: 38-43 cm<br>
          Blade length: 24-29 cm<br>
          Weight: 130 g<br>`,
        price: 1000,
        images: [
          { src: 'basilard', width: 1802, height: 1201 },
          { src: 'basilard', width: 1802, height: 1201 },
          { src: 'basilard_combo', width: 1920, height: 1290, fill: true },
          { src: 'basilard_detail', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'bollock-dagger',
        title: 'Bollock dagger',
        description: 'Bollock dagger, 1200 CZK',
        longDescription: `<p>The name ballock dagger is derived from the phallic shape of the hilt and the 14th century warrior's propensity for wearing the dagger directly in front of the girdle. First appearing on continental effigies around 1300-1350, the ballock dagger has one of the longest usage life spans of the five main types of Medieval daggers.</p>
          <p>We produce the dagger only in this wooden-brass version, which you can see in the photos. The blade can be ordered in a length of 24 or 29 cm. It has a 6 mm round fiberglass core, which ends 6 cm in front of the tip, and for safer stabbing and strengthening of the foam, the end of the core is finished with Kevlar fabric.</p>          
          <br><br><b>
          Specifications<br>
          Total length: 38-43 cm<br>
          Blade length: 24-29 cm<br>
          Weight: 150 g<br>`,
        price: 1200,
        images: [
          { src: 'bollock', width: 1672, height: 1115 },
          { src: 'bollock', width: 1672, height: 1115 },
          { src: 'koularka_detail_1', width: 1920, height: 1280, fill: true },
        ],
      },
      {
        id: 'quillon_dagger',
        title: 'Quillon dagger',
        description: 'Quillon dagger, 1200 CZK',
        longDescription: `<p>The Quillon dagger is probably the longest lived style of dagger, current from the 12th centruy right through to the 17th or even 18th century. Suitable for military men from Late Norman knights to Cromwell’s Roundheads.</p>
          <p>The color of the hilt can be chosen from our classic colors steel, brass, graphite. Leather grips are available in red, black and brown.</p>
          <p>The blade can be ordered in a length of 24 or 29 cm. It has a 6 mm round fiberglass core, which ends 6 cm in front of the tip, and for safer stabbing and strengthening of the foam, the end of the core is finished with Kevlar fabric.</p>          
          <br><br><b>
          Specifications<br>
          Total length: 38-43 cm<br>
          Blade length: 24-29 cm<br>
          Weight: 100 g<br>`,
        price: 1200,
        images: [
          { src: 'quillon', width: 1744, height: 1162 },
          { src: 'mince_stribr_detail', width: 1920, height: 1280, fill: true },
          { src: 'mince_zlata_detail', width: 1920, height: 1280, fill: true },
          { src: 'mince_cerv_detail', width: 1920, height: 1280, fill: true },
        ],
      },
    ],
  },
  {
    id: 'scabbards',
    label: 'Scabbards',
    items: [
      {
        id: 'scabbard-i',
        title: 'Scabbard Type I',
        description: 'Scabbard Type I, 1800 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK), C (1300 CZK), D (1300 CZK)',
          true
        ),
        price: 1800,
        additionalPrice: ' + belt price',
        images: [
          { src: 'pochva6', width: 1920, height: 1280 },
          { src: 'scabbard-1-B', width: 1600, height: 1067 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
      {
        id: 'scabbard-ii',
        title: 'Scabbard Type II',
        description: 'Scabbard Type II, 1800 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK), C (1300 CZK), D (1300 CZK)',
          false
        ),
        price: 1800,
        additionalPrice: ' + belt price',
        images: [
          { src: 'ryba3', width: 1920, height: 1280 },
          { src: 'scabbard-2-C', width: 1600, height: 1067 },
          { src: 'scabbard-2-D', width: 1600, height: 1067 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
      {
        id: 'scabbard-i',
        title: 'Scabbard Type III',
        description: 'Scabbard Type III, 2000 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK), C (1300 CZK), D (1300 CZK)',
          true
        ),
        price: 2000,
        additionalPrice: ' + belt price',
        images: [
          { src: 'pochva5', width: 1920, height: 1280 },
          { src: 'scabbard-3-C', width: 1920, height: 1280 },
          { src: 'scabbard-3-C2', width: 1920, height: 1280 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
      {
        id: 'scabbard-iv',
        title: 'Scabbard Type IV',
        description: 'Scabbard Type IV, 2000 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK), C (1300 CZK), D (1300 CZK)',
          true
        ),
        price: 2000,
        additionalPrice: ' + belt price',
        images: [
          { src: 'pochva7', width: 1920, height: 1280 },
          { src: 'scabbard-4-C', width: 1920, height: 1280 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
      {
        id: 'scabbard-v',
        title: 'Scabbard Type V',
        description: 'Scabbard Type V, 2200 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK), C (1300 CZK), D (1300 CZK)',
          false
        ),
        price: 2200,
        additionalPrice: ' + belt price',
        images: [
          { src: 'pochva2', width: 1920, height: 1280 },
          { src: 'scabbard-5-C', width: 1920, height: 1280 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
      {
        id: 'scabbard-vi',
        title: 'Scabbard Type VI',
        description: 'Scabbard Type VI, 2200 CZK + belt price',
        longDescription: scabbardDescription(
          'A (1000 CZK), B (1300 CZK)',
          false
        ),
        price: 2200,
        additionalPrice: ' + belt price',
        images: [
          { src: 'pochva3', width: 1920, height: 1280, fill: true },
          { src: 'scabbard-6-A', width: 1920, height: 1280 },
          { src: 'scabbard-6-B', width: 1920, height: 1280 },
          { src: 'belt_a', width: 2653, height: 445 },
          { src: 'belt_b', width: 2653, height: 445 },
          { src: 'belt_c', width: 2653, height: 445 },
          { src: 'belt_d', width: 2653, height: 417 },
          { src: 'buckles', width: 2612, height: 1361 },
        ],
      },
    ],
  },
]

export const orderOptions = [
  {
    id: 'sword',
    title: 'Swords',
    price: 2400,
    weight: 0.7,
    components: [
      {
        type: 'select',
        label: 'Hilt',
        options: [
          { title: 'coin', value: 'coin', price: 100 },
          { title: 'pear', value: 'pear', price: 100 },
          { title: 'octagon', value: 'octagon', price: 200 },
          { title: 'fishtail', value: 'fishtail', price: 200 },
          { title: 'doge', value: 'doge', price: 200 },
          { title: 'viking E', value: 'viking E', price: 100 },
          { title: 'viking H', value: 'viking H', price: 100 },
          { title: 'langmesser', value: 'langmesser', price: 100 },
          { title: 'falchion', value: 'falchion', price: 100 },
          { title: 'sabre', value: 'sabre', price: 0 },
        ],
      },
      {
        type: 'select',
        label: 'Core',
        options: [
          { title: 'round 10 mm', value: 'round 10 mm', price: 0 },
          { title: 'rectangular 6x15', value: 'rectangular 6x15', price: 0 },
          {
            title: 'rectangular 8x16 (+100 CZK)',
            value: 'rectangular 8x16',
            price: 100,
          },
        ],
      },
      {
        type: 'select',
        label: 'Pommel color',
        condition: {
          label: 'Hilt',
          values: ['coin', 'pear', 'octagon', 'fishtail', 'doge', 'falchion'],
        },
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Hilt color',
        condition: {
          label: 'Hilt',
          values: ['langmesser', 'sabre', 'viking E', 'viking H'],
        },
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Hilt',
          values: ['coin', 'pear', 'octagon', 'fishtail', 'doge', 'falchion'],
        },
        label: 'Crossguard color',
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Blade',
        options: [
          {
            title: 'arming blade (scabbard available)',
            value: 'arming sword',
            price: 0,
          },
          { title: 'viking blade', value: 'viking sword', price: 0 },
          { title: 'langmesser/sabre blade', value: 'langmesser', price: 0 },
          { title: 'falchion blade', value: 'falchion', price: 0 },
          {
            title: 'doge blade (scabbard available)',
            value: 'doge sword',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Blade color',
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Hilt',
          values: ['pear'],
        },
        label: 'Grip color',
        options: [
          {
            title: 'black',
            value: 'black',
            price: 0,
          },
          {
            title: 'brown',
            value: 'brown',
            price: 0,
          },
          {
            title: 'red',
            value: 'red',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Grip color',
        condition: {
          label: 'Hilt',
          values: [
            'octagon',
            'fishtail',
            'doge',
            'viking E',
            'viking H',
            'coin',
          ],
        },
        options: [
          {
            title: 'black',
            value: 'black',
            price: 0,
          },
          {
            title: 'brown',
            value: 'brown',
            price: 0,
          },
          {
            title: 'red',
            value: 'red',
            price: 0,
          },
          {
            title: 'deluxe black (+200 CZK)',
            value: 'deluxe black',
            price: 200,
          },
          {
            title: 'deluxe brown (+200 CZK)',
            value: 'deluxe brown',
            price: 200,
          },
          {
            title: 'deluxe red (+200 CZK)',
            value: 'deluxe red',
            price: 200,
          },
        ],
      },
      {
        type: 'select',
        label: 'Scabbard',
        condition: { label: 'Blade', values: ['arming sword', 'doge sword'] },
        options: [
          {
            title: 'no scabbard',
            value: 'no scabbard',
            price: 0,
          },
          {
            title: 'type I',
            value: 'type I',
            price: 1700,
            weight: 0.7,
          },
          {
            title: 'type II',
            value: 'type II',
            price: 1700,
            weight: 0.7,
          },
          {
            title: 'type III',
            value: 'type III',
            price: 1900,
            weight: 0.7,
          },
          {
            title: 'type IV',
            value: 'type IV',
            price: 1900,
            weight: 0.7,
          },
          {
            title: 'type V',
            value: 'type V',
            price: 2100,
            weight: 0.7,
          },
          {
            title: 'type VI',
            value: 'type VI',
            price: 2100,
            weight: 0.7,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Scabbard color',
        options: [
          {
            title: 'black',
            value: 'black',
            price: 0,
          },
          {
            title: 'brown',
            value: 'brown',
            price: 0,
          },
          {
            title: 'red',
            value: 'red',
            price: 0,
          },
          {
            title: 'green',
            value: 'green',
            price: 0,
          },
          {
            title: 'yellow',
            value: 'yellow',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: ['type I', 'type II', 'type III', 'type IV', 'type V'],
        },
        label: 'Belt',
        options: [
          {
            title: 'type A',
            value: 'type A',
            price: 1000,
          },
          {
            title: 'type B',
            value: 'type B',
            price: 1300,
          },
          {
            title: 'type C',
            value: 'type C',
            price: 1300,
          },
          {
            title: 'type D',
            value: 'type D',
            price: 1300,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: ['type VI'],
        },
        label: 'Belt',
        options: [
          {
            title: 'type A',
            value: 'type A',
            price: 1000,
          },
          {
            title: 'type B',
            value: 'type B',
            price: 1300,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Belt color',
        options: [
          {
            title: 'black',
            value: 'black',
            price: 0,
          },
          {
            title: 'brown',
            value: 'brown',
            price: 0,
          },
          {
            title: 'burgundy',
            value: 'burgundy',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Buckle',
        options: [
          /*{
            title: 'type 1',
            value: 'type 1',
            price: 0,
          },*/
          {
            title: 'type 2',
            value: 'type 2',
            price: 0,
          },
          {
            title: 'type 3',
            value: 'type 3',
            price: 0,
          },
          {
            title: 'type 4',
            value: 'type 4',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Handedness',
        options: [
          {
            title: 'right handed',
            value: 'right handed',
            price: 0,
          },
          {
            title: 'left handed',
            value: 'left handed',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Chape',
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          /*
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },*/
        ],
      },
      {
        type: 'select',
        condition: {
          label: 'Scabbard',
          values: [
            'type I',
            'type II',
            'type III',
            'type IV',
            'type V',
            'type VI',
          ],
        },
        label: 'Waist circumference',
        options: [...Array(80)].map((_, i) => ({
          title: `${i + 70} cm`,
          value: `${i + 70} cm`,
          price: 0,
        })),
      },
    ],
  },
  {
    id: 'mace',
    title: 'Maces & hammers',
    price: 2000,
    weight: 0.45,
    components: [
      {
        type: 'select',
        label: 'Head',
        options: [
          {
            title: 'bulava',
            value: 'bulava',
            price: 0,
          },
          {
            title: 'mace "Zizka"',
            value: 'mace "Zizka"',
            price: 0,
          },
          {
            title: 'sprinkler',
            value: 'sprinkler',
            price: 0,
          },
          {
            title: 'war hammer',
            value: 'war hammer',
            price: 0,
            weight: 0.1,
          },
        ],
      },
      {
        type: 'select',
        label: 'Color',
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'polearm',
    title: 'Polearms',
    price: 1000,
    weight: 0.175,
    components: [
      {
        type: 'select',
        label: 'Head',
        options: [
          {
            title: 'pike',
            value: 'pike',
            price: 0,
          },
          {
            title: 'spear',
            value: 'spear',
            price: 200,
            weight: 0.1,
          },
        ],
      },
      {
        type: 'select',
        label: 'Length',
        options: [
          {
            title: 'only head',
            value: 'only head',
            price: 0,
          },
          {
            title: 'with 2m shaft (+800 CZK, CZ only)',
            value: 'with 2m shaft',
            price: 800,
            weight: 7.6,
          },
        ],
      },
      {
        type: 'select',
        label: 'Version',
        options: [
          {
            title: 'soft',
            value: 'soft',
            price: 0,
          },
          {
            title: 'hard',
            value: 'hard',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Color',
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'dagger',
    title: 'Daggers',
    price: 1000,
    weight: 0.15,
    components: [
      {
        type: 'select',
        label: 'Dagger type',
        options: [
          {
            title: 'quillon dagger',
            value: 'quillon dagger',
            price: 200,
          },
          {
            title: 'bollock dagger',
            value: 'bollock dagger',
            price: 200,
          },
          {
            title: 'baselard',
            value: 'baselard',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Blade length',
        options: [
          {
            title: '24 cm',
            value: '24 cm',
            price: 0,
          },
          {
            title: '29 cm',
            value: '29 cm',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Pommel color',
        condition: {
          label: 'Dagger type',
          values: ['quillon dagger'],
        },
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Crossguard color',
        condition: {
          label: 'Dagger type',
          values: ['quillon dagger'],
        },
        options: [
          {
            title: 'steel',
            value: 'steel',
            price: 0,
          },
          {
            title: 'graphite',
            value: 'graphite',
            price: 0,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Grip color',
        condition: {
          label: 'Dagger type',
          values: ['quillon dagger'],
        },
        options: [
          {
            title: 'black',
            value: 'black',
            price: 0,
          },
          {
            title: 'brown',
            value: 'brown',
            price: 0,
          },
          {
            title: 'red',
            value: 'red',
            price: 0,
          },
        ],
      },
      {
        type: 'select',
        label: 'Sheathing',
        condition: {
          label: 'Dagger type',
          values: ['baselard'],
        },
        options: [
          {
            title: 'no sheathing',
            value: 'no sheathing',
            price: 0,
          },
          {
            title: 'steel',
            value: 'steel',
            price: 300,
          },
          {
            title: 'brass',
            value: 'brass',
            price: 300,
          },
        ],
      },
    ],
  },
]
