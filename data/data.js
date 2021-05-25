
const LABEL1 = `<i>For more information on blade and hilts materials, balancing and more, see our <a href="/#about">FAQ</a>.</i>`
const LABEL2 = `<i>What can you choose or modify when ordering this weapon?
  <ol>
  <li>Blade type and length. The standard and maximum length of the blades is 70 cm. They can be shortened by request.</li>
  <li>The colour of the metallic shade of the hilt and blade. The hilt can be steel, graphite or brass. The blade can be steel or graphite. The pommel may have a different colour than the crossguard.</li>
  <li>Leather grip type and colour. Either classic leather grip or deluxe version. The colour can be either brown, black or red.</li>
  <li>Fiberglass core. The sword can have either a round 10mm or rectangular 15x6mm core. We also offer a heavier and stronger 16x8mm core. Suitable for Czech hard „kekel“ battles.</li>
</ol></i>`

export const categories = [
  {
    id: 'swords',
    label: 'Double-edged swords',
    items: [
      {
        id: 'vikingsword',
        title: 'One-handed sword - Viking type H',
        description: 'One-handed sword - Viking type H, 2300 - 2400 CZK',
        longDescription:
          `This sword belongs to Petersen's type H. Due to the number of found historical pieces, it is the most numerous of all types of swords from the time of the Vikings. Of the more than 200 weapons found, less than a quarter had a single-edged blade. That's why we decided to offer this version also. Good, simple sword for every nordic warrior.
          <br><br>${LABEL1}<br><br>
          Specifications<br>
          Total lenght: 86 cm<br>
          Blade lenght: 70 cm<br>
          Blade width: 5,5 cm<br>
          Weight: 640 g<br>
          Point of Balance: 11 cm<br>
          <br>${LABEL2}
          `,
        price: 2300,
        images: [
          { src: 'viking_test_6', width: 5383, height: 3589 },
          { src: 'viking_detail', width: 5383, height: 3589 },
          { src: 'viking_kombo', width: 5383, height: 3589 },
        ],
      },
      {
        id: 'sword',
        title: 'Sword',
        description: 'Jednoručka úzká, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1100,
        images: [
          { src: 'mince_uzka', width: 5504, height: 3672 },
          { src: 'mince_detail', width: 5504, height: 3672 },
          { src: 'mince_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'widesword',
        title: 'Wide sword',
        description: 'Jednoručka široká, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1150,
        images: [
          { src: 'mince_siroka', width: 5384, height: 3584 },
          { src: 'mince_detail', width: 5504, height: 3672 },
          { src: 'mince_kombo', width: 5504, height: 3672 },
        ],
      },
    ],
  },

  {
    id: 'messers',
    label: 'Single-edged swords',
    items: [
      {
        id: 'falchion',
        title: 'Falchion',
        description: 'Falchion, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1200,
        images: [
          { src: 'Falchion_1', width: 5505, height: 3670 },
          { src: 'Falchion_detail', width: 5858, height: 3905 },
          { src: 'Falchion_kombo', width: 5504, height: 3672 },
        ],
      },
      {
        id: 'messer',
        title: 'Messer',
        description: 'Tesák, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
        price: 1200,
        images: [
          { src: 'messer_1', width: 5606, height: 3737 },
          { src: 'messer_detail', width: 5762, height: 3841 },
          { src: 'messer_kombo', width: 5606, height: 3737 },
          { src: 'messer_3', width: 5378, height: 3585 },
        ],
      },
      {
        id: 'saber',
        title: 'Saber',
        description: 'Šavle, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nulla est. Curabitur sagittis hendrerit ante. Fusce suscipit libero eget elit. Etiam posuere lacus quis dolor. Sed convallis magna eu sem. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.',
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
]

export const orderOptions = [
  {
    id: 'spear',
    title: 'Spear',
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
            title: 'complete spear 2 metres',
            value: 'complete spear 2 metres',
            price: 700,
          },
          {
            title: 'only spearhead',
            value: 'only spearhead',
            price: 0,
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
    title: 'Sword',
    price: 2300,
    components: [
      {
        type: 'select',
        label: 'Pommel',
        options: [
          { title: 'viking E', value: 'viking E', price: 0 },
          { title: 'viking H', value: 'viking H', price: 0 },
          { title: 'coin', value: 'coin', price: 0 },
          { title: 'pear', value: 'pear', price: 0 },
          { title: 'octagon', value: 'octagon', price: 100 },
          { title: 'fishtale', value: 'fishtale', price: 100 },
          { title: 'venice', value: 'venice', price: 0 },
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
        label: 'Blade',
        options: [
          { title: 'arming sword blade', value: 'arming sword', price: 0 },
          { title: 'viking sword blade', value: 'viking sword', price: 0 },
          { title: 'langmesser blade', value: 'langmesser', price: 0 },
          { title: 'falchion blade', value: 'falchion', price: 0 },
          { title: 'venice sword blade', value: 'venice sword', price: 0 },
        ],
      },
      {
        type: 'select',
        label: 'Core',
        options: [
          { title: 'round 10 mm', value: 'round 10 mm', price: 0 },
          { title: 'rectangular 6x15', value: 'rectangular 6x15', price: 0 },
          { title: 'rectangular 8x16 (+100 CZK)', value: 'rectangular 8x16', price: 100 },
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
    ],
  },
  {
    id: 'mace',
    title: 'Mace',
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
            title: 'mace',
            value: 'mace',
            price: 0,
          },
          {
            title: 'spiked club',
            value: 'spiked club',
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
        label: 'Length',
        options: [
          {
            title: 'complete weapon',
            value: 'complete weapon',
            price: 0,
          },
          {
            title: 'only head',
            value: 'only head',
            price: 0,
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
    id: 'bollock_dagger',
    title: 'Bollock dagger',
    price: 1000,
    components: [
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
    ],
  },
  {
    id: 'dagger',
    title: 'Dagger',
    price: 1000,
    components: [
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
    ],
  },
  {
    id: 'baselard',
    title: 'Baselard',
    price: 800,
    components: [
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
        label: 'Sheathing',
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
    ],
  },
]
