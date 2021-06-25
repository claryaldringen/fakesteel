const LABEL1 = `For more information on blade and hilts materials, balancing and more, see our <a href="/#about">FAQ</a>.`
const LABEL2 = `What can you choose or modify when ordering this weapon?
  <ol>
  <li>Blade type and length. The standard and maximum length of the blades is 70 cm. They can be shortened by request.</li>
  <li>The colour of the metallic shade of the hilt and blade. The hilt can be steel, graphite or brass. The blade can be steel or graphite. The pommel may have a different colour than the crossguard.</li>
  <li>Leather grip type and colour. Either classic leather grip or deluxe version. The colour can be either brown, black or red.</li>
  <li>Fiberglass core. The sword can have either a round 10mm or rectangular 15x6mm core. We also offer a heavier and stronger 16x8mm core. Suitable for Czech hard „kekel“ battles.</li>
</ol>`

export const categories = [
  {
    id: 'swords',
    label: 'Double-edged swords',
    items: [
      {
        id: 'vikingsword-h',
        title: 'One-handed sword - Viking type H',
        description: 'One-handed sword - Viking type H, 2300 CZK',
        longDescription: `This sword belongs to Petersen's type H. Due to the number of found historical pieces, it is the most numerous of all types of swords from the time of the Vikings. Of the more than 200 weapons found, less than a quarter had a single-edged blade. That's why we decided to offer this version also. Good, simple sword for every nordic warrior.
          <br><br><b>
          Specifications<br>
          Total lenght: 86 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 640 g<br>
          Point of Balance: 11 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}
          `,
        price: 2300,
        images: [
          { src: 'viking_1', width: 5800, height: 3867 },
          { src: 'viking_2', width: 5800, height: 3867 },
        ],
      },
      {
        id: 'vikingsword-e',
        title: 'One-handed sword - Viking type E',
        description: 'One-handed sword - Viking type E, 2300 CZK',
        longDescription: `During manufacture of this sword from the 10th century, we tried our best to stick to the preserved finding. It is a weapon found in 1874 in Gnezdov, Russia. The sword belongs to Petersen's type E, which was very popular in the Viking world and today we find it in Sweden, Norway, Finland, Russia, Estonia and Ireland. Great sword for a noble nordic warrior.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 690 g<br>
          Point of Balance: 9.5 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}
          `,
        price: 2300,
        images: [
          { src: 'viking', width: 5800, height: 3867 },
          { src: 'viking_combo', width: 5800, height: 3867 },
          { src: 'viking_detail', width: 5360, height: 3573 },
        ],
      },
      {
        id: 'one-handed-sword-octagon',
        title: 'One-handed sword - Octagon',
        description: 'One-handed sword - Octagon, 2400 CZK',
        longDescription: `We present you our new one-handed sword, type-fitting into the 14th and 15th centuries. Oakeshott refers to this octagonal head as type I1. The handle on this model is also octagonal. The hilt is shaped with an emphasis on detail. It is one of our more magnificent swords suitable for a noble warrior or knight.
          <br><br><b>
          Specifications<br>
          Total lenght: 88 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 660 g<br>
          Point of Balance: 9 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}
          `,
        price: 2400,
        images: [
          { src: 'oktagon', width: 5800, height: 3867 },
          { src: 'oktagon_2', width: 5800, height: 3867 },
          { src: 'oktagon_3', width: 5800, height: 3867 },
          { src: 'oktagon_4', width: 5800, height: 3867 },
        ],
      },
      {
        id: 'one-handed-sword-pear',
        title: 'One-handed sword - Pear',
        description: 'One-handed sword - Pear, 2400 CZK',
        longDescription: `This one-handed arming sword is the first weapon we have ever made years ago and we are very satisfied with this simple and durable hilt design. A strong straight crossguard, and a massive pear-shaped hexagonal pommel with longer grip give this sword shorter Point of balance. Very good sword for 18x6 core and fans of harder battles.
          <br><br><b>
          Specifications<br>
          Total lenght: 90 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 700 g<br>
          Point of Balance: 7.5 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 2400,
        images: [
          { src: 'hruska_uzka', width: 5800, height: 3867 },
          { src: 'hruska_siroka', width: 5800, height: 3867 },
          { src: 'hruska_combo', width: 5800, height: 3867 },
          { src: 'hruska_detail', width: 5695, height: 3797 },
        ],
      },
      {
        id: 'one-handed-sword-coin',
        title: 'One-handed sword - Coin',
        description: 'One-handed sword - Coin, 2400 CZK',
        longDescription: `The simple design of this hilt is based on the popular one-handed swords of the 14th century. The curved ends of the crossguard and the coin-shaped pommel are typical features of this knight's weapon. Oakeshott in his typology refers to this type of pommel with the letter J and we call this hilt simply – Coin.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 680 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 2300,
        images: [
          { src: 'mince_uzka', width: 5800, height: 3867 },
          { src: 'mince_siroka', width: 5800, height: 3867 },
          { src: 'mince_combo', width: 5800, height: 3867 },
          { src: 'mince_detail', width: 5491, height: 3661 },
        ],
      },
      {
        id: 'one-handed-sword-fishtail',
        title: 'One-handed sword - Fishtail',
        description: 'One-handed sword - Fishtail, 2400 CZK',
        longDescription: `Weapons from the 15th century inspired us for this sword hilt. Oakeshott refers to this type of pommel with the letter V and is commonly referred to as a fishtail. An exciting feature of this model is a hexagonal handle with a very pleasant grip. It is one of our more magnificent swords suitable for a noble warrior or knight.
          <br><br><b>
          Specifications<br>
          Total lenght: 87 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5.5 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 2400,
        images: [
          { src: 'ryba', width: 5800, height: 3867 },
          { src: 'ryba_2', width: 5800, height: 3867 },
          { src: 'ryba_3', width: 5800, height: 3867 },
          { src: 'ryba_4', width: 5800, height: 3867 },
        ],
      },
      {
        id: 'one-handed-sword-doge',
        title: 'One-handed sword – Doge',
        description: 'One-handed sword – Doge, 2400 CZK',
        longDescription: `Our Doge sword is based on surviving examples with the Doge museum in Venice. Its curved guard with finger protector is common on swords form this area of Europe, and the distinctive-shaped pommel sets it apart from other medieval and renaissance swords. We've also made a new narrower double-edged blade for this sword to make it easier to use the finger-ring on the guard. 
          <br><br><b>
          Specifications<br>
          Total lenght: 85 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4.5 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 1150,
        images: [
          { src: 'doge_ocel_nova_uvodka', width: 5800, height: 2207 },
          { src: 'doge_detail', width: 5310, height: 3540 },
          { src: 'doge_combo_zlata_tmava', width: 5800, height: 3867 },
          { src: 'doge_pochva', width: 5694, height: 3796 },
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
        description: 'One-handed sword – Falchion, 1200 - 1500 CZK',
        longDescription: `During the production we were mainly inspired by the so-called "Thorpe falchion", found in England in the bed of the river Yare near the town of Thorpe St. Andrew. The sword is usually dated to the beginning of the 14th century. The ideal secondary weapon with single-edged blade for every archer or spearman.
          <br><br><b>
          Specifications<br>
          Total lenght: 80 cm<br>
          Blade lenght: 64 cm<br>
          Blade width: 4 cm<br>
          Weight: 600 g<br>
          Point of Balance: 9 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 1200,
        images: [
          { src: 'falchion_1', width: 5800, height: 3867 },
          { src: 'Falchion_detail', width: 5858, height: 3905 },
          { src: 'Falchion_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'one-handed-sword-langmesser',
        title: 'One-handed sword – Langmesser',
        description: 'One-handed sword – Langmesser, 1200 - 1500 Kč',
        longDescription: `This sword is inspired by the classic shape of German Grosse Messers we can see in fencing manuals of 15th and 16th centuries. A typical feature of this hilt is a wooden knife handle as well as a lug on the outside of the crossguard that protects the knuckles of the hand. A great and effective single-edged bladed weapon for all common soldiers.
          <br><br><b>
          Specifications<br>
          Total lenght: 88 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4 cm<br>
          Weight: 670 g<br>
          Point of Balance: 8.5 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 1200,
        images: [
          { src: 'messer_1', width: 5606, height: 3737 },
          { src: 'messer_detail', width: 5762, height: 3841 },
          { src: 'messer_kombo', width: 5606, height: 3737 },
          { src: 'messer_3', width: 5378, height: 3585 },
        ],
      },
      {
        id: 'one-handed-sword-sabre-briquet',
        title: 'One-handed sabre - Briquet',
        description: 'One-handed sabre - Briquet, 1200 - 1500 Kč',
        longDescription: `The inspiration for us were the French short infantry sabers "Briquet", which became famous especially during the revolution and the Napoleonic Wars. These small sabers very often had an almost straight single-edged blade, so it was the perfect option for us.
          <br><br><b>
          Specifications<br>
          Total lenght: 85 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 4 cm<br>
          Weight: 620 g<br>
          Point of Balance: 16 cm<br>
          </b><br>${LABEL2}<br>${LABEL1}`,
        price: 1200,
        images: [
          { src: 'savle_1', width: 5440, height: 3627 },
          { src: 'savle_detail', width: 5015, height: 3343 },
          { src: 'savle_kombo', width: 5156, height: 3437 },
        ],
      },
    ],
  },
  {
    id: 'maces',
    label: 'Maces & War hammers',
    items: [
      {
        id: 'mace_a',
        title: 'Bulava',
        description: 'Mace A',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'palcat_A', width: 4649, height: 3099 },
          { src: 'palcat_A_detail', width: 5171, height: 3447 },
          { src: 'palcat_A_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'mace_b',
        title: 'Mace',
        description: 'Mace B',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'palcat_B', width: 4649, height: 3099 },
          { src: 'palcat_B_detail', width: 5171, height: 3447 },
          { src: 'palcat_B_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'mace_c',
        title: 'Spiked club',
        description: 'Mace C',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'palcat_C', width: 4649, height: 3099 },
          { src: 'palcat_C_detail', width: 5171, height: 3447 },
          { src: 'palcat_C_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'hammer',
        title: 'Hammer',
        description: 'Hammer',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'kladivo_2', width: 5130, height: 3420 },
          { src: 'kladivo_detail', width: 5316, height: 3544 },
          { src: 'kladivo_kombo', width: 5504, height: 3672 },
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
        description:
          'Just spear. Wooden end towards you, sharp end towards enemy.',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'kopi_detail', width: 5375, height: 3583 },
          { src: 'kopi_detail_2', width: 5627, height: 3751 },
          { src: 'kopi_kombo_2', width: 5166, height: 3443 },
          { src: 'kopi_kombo3', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'pike',
        title: 'Pike',
        description:
          'Just pike. Wooden end towards you, sharp end towards enemy.',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1000,
        images: [
          { src: 'pika_4', width: 5540, height: 3693 },
          { src: 'pika_1', width: 3025, height: 4538 },
          { src: 'pika_2', width: 2279, height: 4169 },
          { src: 'pika_3', width: 5351, height: 3567 },
        ],
      },
    ],
  },
  {
    id: 'daggers',
    label: 'Medieval daggers',
    items: [
      {
        id: 'basilard',
        title: 'Basilard',
        description: 'Basilard',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1150,
        images: [
          { src: 'balisard_detail_1', width: 5799, height: 3866 },
          { src: 'balisard_detail_kombo', width: 5156, height: 3437 },
          { src: 'balisard_pochva_kombo', width: 5156, height: 3437 },
          { src: 'balisard_kombo', width: 5156, height: 3437 },
          { src: 'balisard_rukojet_2', width: 5205, height: 3470 },
        ],
      },
      {
        id: 'dagger',
        title: 'Dagger',
        description: 'Dagger with balls',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1150,
        images: [
          { src: 'koularka_detail', width: 5681, height: 3787 },
          { src: 'koularka_kombo', width: 5156, height: 3437 },
          { src: 'koularka_pochva_kombo', width: 5156, height: 3437 },
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
        description: 'Scabbard Type I, 1600 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1600,
        images: [
          { src: 'pochva6', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
      {
        id: 'scabbard-ii',
        title: 'Scabbard Type II',
        description: 'Scabbard Type II, 1600 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1600,
        images: [
          { src: 'pochva1', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
      {
        id: 'scabbard-i',
        title: 'Scabbard Type III',
        description: 'Scabbard Type III, 1800 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1800,
        images: [
          { src: 'pochva5', width: 5800, height: 3867 },
          { src: 'pochva8', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
      {
        id: 'scabbard-iv',
        title: 'Scabbard Type IV',
        description: 'Scabbard Type IV, 1800 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1800,
        images: [
          { src: 'pochva7', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
      {
        id: 'scabbard-v',
        title: 'Scabbard Type V',
        description: 'Scabbard Type V, 2000 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 2000,
        images: [
          { src: 'pochva2', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
      {
        id: 'scabbard-vi',
        title: 'Scabbard Type VI',
        description: 'Scabbard Type VI, 2000 CZK',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 2000,
        images: [
          { src: 'pochva3', width: 5800, height: 3867 },
          { src: 'belts', width: 1314, height: 1801 },
          { src: 'buckles', width: 1713, height: 1061 },
        ],
      },
    ],
  },
]

export const orderOptions = [
  {
    id: 'polearms',
    title: 'Polearms',
    price: 1000,
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
            price: 0,
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
            title: 'with 2m shaft (CZ only)',
            value: 'with 2m shaft',
            price: 700,
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
    id: 'sword',
    title: 'Swords',
    price: 2300,
    components: [
      {
        type: 'select',
        label: 'Hilt',
        options: [
          { title: 'viking E', value: 'viking E', price: 0 },
          { title: 'viking H', value: 'viking H', price: 0 },
          { title: 'coin', value: 'coin', price: 0 },
          { title: 'pear', value: 'pear', price: 0 },
          { title: 'octagon', value: 'octagon', price: 100 },
          { title: 'fishtail', value: 'fishtail', price: 100 },
          { title: 'doge', value: 'doge', price: 0 },
          { title: 'langmesser', value: 'langmesser', price: 0 },
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
          values: ['coin', 'pear', 'octagon', 'fishtail', 'doge'],
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
          { title: 'arming sword blade', value: 'arming sword', price: 0 },
          { title: 'viking sword blade', value: 'viking sword', price: 0 },
          { title: 'langmesser blade', value: 'langmesser', price: 0 },
          { title: 'falchion blade', value: 'falchion', price: 0 },
          { title: 'doge sword blade', value: 'doge sword', price: 0 },
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
        label: 'Scabbard',
        condition: { label: 'Blade', values: ['arming sword'] },
        options: [
          {
            title: 'no scabbard',
            value: 'no scabbard',
            price: 0,
          },
          {
            title: 'type I',
            value: 'type I',
            price: 1600,
          },
          {
            title: 'type II',
            value: 'type II',
            price: 1600,
          },
          {
            title: 'type III',
            value: 'type III',
            price: 1800,
          },
          {
            title: 'type IV',
            value: 'type IV',
            price: 1800,
          },
          {
            title: 'type V',
            value: 'type V',
            price: 2000,
          },
          {
            title: 'type VI',
            value: 'type VI',
            price: 2000,
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
            price: 0,
          },
          {
            title: 'type B',
            value: 'type B',
            price: 0,
          },
          {
            title: 'type C',
            value: 'type C',
            price: 0,
          },
          {
            title: 'type C',
            value: 'type C',
            price: 0,
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
            price: 0,
          },
          {
            title: 'type B',
            value: 'type B',
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
        label: 'Belt color',
        options: [
          {
            title: 'natural',
            value: 'natural',
            price: 0,
          },
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
          {
            title: 'type 1',
            value: 'type 1',
            price: 0,
          },
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
        label: 'Chape',
        options: [
          {
            title: 'steel',
            value: 'steel',
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
        options: [...Array(210)].map((_, i) => ({
          title: `${i + 33} cm`,
          value: `${i + 33} cm`,
          price: 0,
        })),
      },
    ],
  },
  {
    id: 'mace',
    title: 'Maces & hammers',
    price: 1000,
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
            title: 'hammer',
            value: 'hammer',
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
    id: 'daggers',
    title: 'Daggers',
    price: 800,
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
          values: ['quillon dagger', 'baselard'],
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
