/**
 * @file /lib/data/vehicles.ts
 * @description In-memory structured relational database representing active electric vehicle inventories.
 * Each model entry specifies:
 * 1. Metadata keys, names and status badges.
 * 2. Visual resource links: Including hero graphics, exterior profiles, interior detail sweeps, and brand logos.
 * 3. Dynamic numeric specification nodes (acceleration factors, full charge ranges, aerodynamic coefficients).
 * 4. Quad-language localization maps (en, fr, sw, rn) mapping all client UI blocks.
 */

export const vehicles = {
  "byd-han-ev": {
    id: "byd-han-ev",
    name: "BYD Han EV",
    tag1: "New Arrival",
    tag2: "Hybrid",
    summarySpecs: [
      {
        label: "Range",
        value: "605",
        unit: "KM",
      },
      {
        label: "0-100 km/h",
        value: "3.9",
        unit: "SEC",
      },
      {
        label: "Top Speed",
        value: "180",
        unit: "KM/H",
      },
    ],
    images: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcZ98Nmv8ZUm0uQW29hjanmqdFLCGnvkWOLZN-cBfZR2rdrGP_6fCQAHtv05A2HO2dfWZsFASDpaMENUaALAS0urJ-NT9l7tO9Zx8rY10uM2T5FzUcjYsACFZMh30UA7yfW1FycovCReJ1Bdvmo0OFGw1B_B0E8rK3n_m_iesmJT6z63ZNbha-op7f4JxDl-MLL41xyuYTZE7KjBNs1tlrlNWnYerIS5XX0TRF0A0lpZcdelAmGvGUEJj2O-vTLGUlceZ7g53k_bzh",
      philosophyImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDzTu74Du2hne-XQTX3lZwa9yFC_qkuuDK6Q2VsyLUUssqKFQaV7T6ZQa4WiC4kwtrg47rCmsiLrk33Wmbx55POMz5wzBuYI4_yW49B9hglWj1STQ6gsQop_MX4AksJQVxCZYYpCJMiOBK9I9jDQZ74AWg6bMQImGHCOmHsXwvdjzVvKT1rfqorso9nJhZeuMgisAN6juvSp7oPbYg-pIcWqFyXJgD1yEAauleEZmDLHMUBy1kT5cMSlYxykzC9QfwvFLRyH8rK_Kxu",
      videoPoster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBK2KMirEYTQQV6Znk3AaBAeEBbmN88BP0R1ufoOTTub6HXqI1RQDbACmW4aA-MThMwp6SnoDdZTHNEM4Xez1gB6argQhFRIvlOvvLivR7sEAsSAGD5g4VHRB67pxash9iJU1uky-4-xL6A2Hd1JvFXV1WLmgIBhnIvfuVJ-5QbQxt-s-7ttdZ7BVkC02VYOhozPiQ1tlkGXmXoSBqjJyRsdQW_fgb_jIt88gK1x6MDv93KYrqDAubrAUXVnUA8z40NPczwHciXpuaV",
      exteriorMain:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9m22YzhyKsqXcACr5TIx7Ip4yExCZE4nAa60D4p455u7qFZ550CN-DElb3frdkFBkzX-h-qCLMf7XZs5GnUTi33i7GUVmDFBAW--0sVt4d_fygejOfWFZHbtcanXvu1SCs5JHIWCpcolZxOVM8_Wa098Oehp2ReRWxIzs8Le3Elugqhn6Em98XOFkwfxIQWSSxMDgEX6IcdGy44bnZwEZhNy-wjiRxQkH1CanGkLk_iOVtPVu4u8du4zNeyVE5iRpF3SS1ZQFqUSQ",
      batteryBg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZf2kNuBCb09oqPw_1LF8J5gK5Bc-1zgZJSR7FLsXLn4qvxp4uklc7jCghZs6eUvRwbgCVb1NQohM-zYOdIj4GeuEpcPVNfjpXZKh3O_4K6auFFw7xotIoDGKYwwNt7UoajqK4RUlmGqNkLquZxPDpoGHBQkInsXbS0h4BU2sqHEaSqXGN6Ds1gkqhXffBhHATDbmn6t-MYvPo04TwfZSIV1aIhNlDn5T7dAH3kpi6d29bT4kXn51h1OCfLgjeLXGYth9d4yY94Fe4",
      gallery: [
        "https://lh3.googleusercontent.com/aida/AP1WRLuamVM4tNogZNLTqdyJAo-518ueGEtuyaoGUZNzHJCk-pSjv6L9cJHejFB2b_hiFVUNCiFEzCKkact2oxtEkEitk1dW4FopxO-3PabfQC9bnUi4HdjGF1wumP_xsCLenKKAk-PrJS0kXH3SvxfpXonKmf-FxMagE4_MnGjJjVwPRTIyI61oJTTKPInV4anR4LhbX9Vhi3dOKkk8oOFHoQT1fOkxYN6qPpKXo8A0NWKz04Cfv3Z0XEPQClV_",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUR5eXJJHt0QyPTPyLeYFRK8qbmgFbj2_9Ufrd2yp9rsPd6xZijDgN5-fLgDwIkYNCTXCEdFe8Rooxlg41ilf2dw6ikG1I18UKyRSBLUhZz8e86rAogWGUpZPbDOw28MCJTGbS3RXTIo0tIjbx_LzhFj7F8uCgYQauJ3YLH74vZPrVapXiLoS-lWz8h5NXS7XLncD1Ilpv2YbElThxjVLy3JPdDcgwtxEMk-HHTsJ5DuxE8NlCgzMuEBVwmC1Vsw9qxAnhQyzDhQSY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcZ98Nmv8ZUm0uQW29hjanmqdFLCGnvkWOLZN-cBfZR2rdrGP_6fCQAHtv05A2HO2dfWZsFASDpaMENUaALAS0urJ-NT9l7tO9Zx8rY10uM2T5FzUcjYsACFZMh30UA7yfW1FycovCReJ1Bdvmo0OFGw1B_B0E8rK3n_m_iesmJT6z63ZNbha-op7f4JxDl-MLL41xyuYTZE7KjBNs1tlrlNWnYerIS5XX0TRF0A0lpZcdelAmGvGUEJj2O-vTLGUlceZ7g53k_bzh",
      ],
      interior: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNGlfWcGq1TcAIH1oOm-ufPKildEP3beRWQCEL9k93M1ri34PYvsHUMoxyjmUdXzRVY5UdakY8gkHH-8nrUEh-iEJW7rABRH9EwW542hGOm9alJEAVlwe1JgWJmWYAMVsvwHmhpuET69i8HlTv6tCPkVf2zpTFdC--O-6mtlEorasc6d48aNm4ZRNHQMGqSF2NpQBj-zXeZMcw8VsOwiHiMe-zrjd_JFIvlom6kjGYiYDf_FQRm-Dn3fREWtVxgpymLtmSRWXTH5lx",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9CR4rP3haBShMzT-i90lIEmAJEH1IlSqXApiWUrjexmjWvXAxCwmq5NxeAFumGcqsdLnYgJIltYwRWiBZ9IU7QK2Chcjq6YC_BCVWmue1re2o5nRacxVj5QpwNRUDInjldfDj_JVAJrFHxA1KCskqdekkIXJL1ROQZwFvtapOmu_eSJuqgCr75w3_5KIs1MR4aADiuN5cYYH941JyxNW7MSm0g8MXj75Ygu0jWAGqMFc74NiobVudfJCCQXpV7jHRe-QKWrJctt1X",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6ROOe-ldeWEuOcNyO5yIinuYxKXK6bP6A7W-9EbcN-xQJeRCtKP-a1SUQaQdzCYvY29NBPt6fIW7Tcd8DwYHhg_7IyOoNL97ScAwxGbwa-Zd4vnSMdtArad-Y9CzM1ajKxIfQQE8rI9DCp8Tpa0txCQWVvGFGkyRDIhNS7Uq0wiYutEVUxbOeoSk0iC_SsBO73-plUemyTS748Ga2uEZR3qAvBkQ5I-b_COgzMO4nPsRfgcpBa6ScOoxJlx_KSvw_OO33R7vNnHgs",
      ],
      brandLogo:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVZxniLu0p4PHAz9E1jZ4gzXYKXomg2_hZb2gTOOaGtyaFMtUCZF71_OUCXew5lzSImWPSzjrOtjhIQghQy-TB3eQoDwPolrpCp8Sz2_BZmt_Jc7Z8RvYYvw7s77fKeYiQx8S0_0FIUTgX5kK-nTqwVaOCeE_Xlv-8eUfIq4rsGdLlGtrqwcjiiVsx8qKV9GA6IUd5MvgMslX1aM3vh417C4EN4Ixxk42aeTALhv2WUz5hDMoIf4CQ3vei3p6eqw3uccVCsJu8x3R",
      ctaBg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUR5eXJJHt0QyPTPyLeYFRK8qbmgFbj2_9Ufrd2yp9rsPd6xZijDgN5-fLgDwIkYNCTXCEdFe8Rooxlg41ilf2dw6ikG1I18UKyRSBLUhZz8e86rAogWGUpZPbDOw28MCJTGbS3RXTIo0tIjbx_LzhFj7F8uCgYQauJ3YLH74vZPrVapXiLoS-lWz8h5NXS7XLncD1Ilpv2YbElThxjVLy3JPdDcgwtxEMk-HHTsJ5DuxE8NlCgzMuEBVwmC1Vsw9qxAnhQyzDhQSY",
    },
    specs: {
      acceleration: "3.9s",
      range: "605km",
      cdValue: "0.233",
    },
    i18n: {
      en: {
        hero: {
          title: "BYD Han EV:",
          subtitle: "The Apex of Performance",
          description:
            "Experience the zenith of electric engineering, where luxury meets lightning-fast agility.",
          accelLabel: "0-100 km/h",
          rangeLabel: "NEDC Range",
          cdLabel: "Cd Value",
          btnConfigure: "CONFIGURE YOUR HAN",
          btnDiscover: "DISCOVER MORE",
        },
        philosophy: {
          label: "The Philosophy",
          title: "Elegance Meets Intelligence",
          description:
            'The BYD Han EV is more than a vehicle; it is a statement of intent. Inspired by the strength and grace of Eastern aesthetics, the Han combines traditional "Dragon Face" design elements with the cutting-edge requirements of modern electric performance.',
          quote:
            "\"We didn't just build a car. We designed a sanctuary for the road, where every stitch and every sensor serves the driver's ultimate comfort and control.\"",
        },
        video: {
          title: "Experience the Motion",
        },
        exterior: {
          label: "Visual Mastery",
          title: "Dragon Face Design Language",
          description:
            "A harmonious blend of aesthetic beauty and aerodynamic efficiency, boasting a coefficient of drag of just 0.233.",
          feature1Title: "Illuminating Presence",
          feature1Desc:
            "Adaptive LED matrix headlamps inspired by the intense gaze of a dragon, slicing through the darkness with crystalline precision.",
          feature2Title: "Aerodynamic Sculpting",
          feature2Desc:
            "Every curve is intentional. Retractable door handles and a streamlined floorpan ensure maximum efficiency and whisper-quiet operation.",
        },
        battery: {
          label: "The Core Power",
          title: "Revolutionary Blade Battery",
          description:
            "Safety is not an option; it is the foundation. The BYD Blade Battery passes the most rigorous nail penetration tests, ensuring thermal stability that leads the industry.",
          features: [
            {
              icon: "verified",
              title: "UNMATCHED SAFETY",
              desc: "Highly stable structure resistant to thermal runaway even under extreme conditions.",
            },
            {
              icon: "bolt",
              title: "ULTRA-FAST CHARGING",
              desc: "Charge from 30% to 80% in just 25 minutes using high-speed DC architecture.",
            },
            {
              icon: "battery_charging_full",
              title: "ENERGY DENSITY",
              desc: "150 Wh/kg optimized for long-range efficiency.",
            },
            {
              icon: "thermostat",
              title: "THERMAL MANAGEMENT",
              desc: "Advanced liquid cooling and heating system for peak performance in all climates.",
            },
            {
              icon: "update",
              title: "LIFECYCLE",
              desc: "3000+ charge cycles (approx. 1.2 million km) for extreme longevity.",
            },
            {
              icon: "science",
              title: "MATERIAL",
              desc: "Lithium Iron Phosphate (LFP) chemistry for superior stability and sustainability.",
            },
          ],
        },
        performance: {
          title: "Electric All-Wheel Drive",
          description:
            "A dual-motor system delivering 363 kW of power. The intelligent AWD system adjusts torque in milliseconds, providing supercar levels of traction and handling.",
          bullets: [
            "494 Horsepower Equivalent",
            "680 Nm Peak Torque",
            "Brembo Braking System",
          ],
          stat: "3.9",
          statLabel: "Seconds to 100km/h",
        },
        gallery: {
          label: "Exterior Showcase",
          title: "Visual Perfection from Every Angle",
        },
        interior: {
          title: "Your Private Sanctuary",
          description:
            "Step into a world of curated luxury. Hand-stitched Nappa leather, authentic wood veneers, and aluminum accents create an environment of unparalleled refinement.",
          features: [
            {
              title: "Adaptive Display",
              desc: "A 15.6-inch ultra-HD rotatable screen that adapts to your preferred viewing angle for navigation or entertainment.",
            },
            {
              title: "Nappa Luxury",
              desc: "Premium hides sourced from top-tier tanneries, offering a tactile experience that is both soft and exceptionally durable.",
            },
            {
              title: "Sonic Perfection",
              desc: "A custom-tuned Dynaudio premium sound system with 12 speakers delivering a concert-hall experience in total silence.",
            },
          ],
        },
        safety: {
          title: "DiPilot: The Intelligent Guardian",
          features: [
            {
              icon: "sensors",
              title: "22 Precision Sensors",
              desc: "Equipped with 12 ultrasonic radars and 5 high-definition cameras for 360-degree environmental awareness.",
            },
            {
              icon: "psychology",
              title: "Level 2+ Autonomy",
              desc: "Advanced lane-keeping, adaptive cruise control, and automatic emergency braking for a fatigue-free driving experience.",
            },
          ],
        },
        heritage: {
          title: "A Legacy of Innovation",
          description:
            "Skyline Motors is proud to partner with BYD, the global leader in new energy vehicles, to bring the pinnacle of electric excellence to our most discerning clientele.",
        },
        ctaSupport: {
          title: "Seal the Excellence",
          description:
            "Finalize your acquisition or consult with our master specialists regarding bespoke configurations. Precision service is only a conversation away.",
          btn: "Chat with a Specialist",
        },
        ctaEnd: {
          title: "THE FUTURE IS NOW.",
          description:
            "Your journey into the apex of performance begins with a single drive.",
          btnPrimary: "RESERVE NOW",
          btnSecondary: "CONFIGURE YOUR HAN",
          footer: "Exclusivity is standard. Innovation is mandatory.",
        },
      },
      fr: {
        hero: {
          title: "BYD Han EV:",
          subtitle: "Le Sommet de la Performance",
          description:
            "Faites l'expérience du zénith de l'ingénierie électrique, où le luxe rencontre une agilité foudroyante.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Autonomie NEDC",
          cdLabel: "Valeur Cd",
          btnConfigure: "CONFIGUREZ VOTRE HAN",
          btnDiscover: "DÉCOUVREZ PLUS",
        },
        philosophy: {
          label: "La Philosophie",
          title: "L'Élégance Rencontre L'Intelligence",
          description:
            "Le BYD Han EV est plus qu'un véhicule ; c'est une déclaration d'intention. Inspiré par la force et la grâce de l'esthétique orientale, le Han combine les éléments de design traditionnels \"Dragon Face\" avec les exigences de pointe de la performance électrique moderne.",
          quote:
            '"Nous n\'avons pas seulement construit une voiture. Nous avons conçu un sanctuaire pour la route, où chaque capteur sert le confort et le contrôle du conducteur."',
        },
        video: {
          title: "Vivez le Mouvement",
        },
        exterior: {
          label: "Maîtrise Visuelle",
          title: "Langage Design Dragon Face",
          description:
            "Un mélange harmonieux de beauté esthétique et d'efficacité aérodynamique, avec un coefficient de traînée de seulement 0,233.",
          feature1Title: "Présence Illuminatrice",
          feature1Desc:
            "Phares LED adaptatifs Matrix inspirés par le regard intense d'un dragon, perçant l'obscurité avec précision.",
          feature2Title: "Sculpture Aérodynamique",
          feature2Desc:
            "Chaque courbe est intentionnelle. Les poignées de porte rétractables assurent une efficacité maximale et un fonctionnement silencieux.",
        },
        battery: {
          label: "La Puissance Centrale",
          title: "Batterie Lame Révolutionnaire",
          description:
            "La sécurité n'est pas une option. La Batterie Lame BYD passe les tests de pénétration de clous les plus rigoureux, assurant une stabilité thermique leader de l'industrie.",
          features: [
            {
              icon: "verified",
              title: "SÉCURITÉ INÉGALÉE",
              desc: "Structure très stable, résistante à l'emballement thermique.",
            },
            {
              icon: "bolt",
              title: "RECHARGE ULTRA-RAPIDE",
              desc: "Chargez de 30% à 80% en seulement 25 minutes.",
            },
            {
              icon: "battery_charging_full",
              title: "DENSITÉ ÉNERGÉTIQUE",
              desc: "150 Wh/kg optimisé pour l'efficacité.",
            },
            {
              icon: "thermostat",
              title: "GESTION THERMIQUE",
              desc: "Système de refroidissement liquide avancé.",
            },
            {
              icon: "update",
              title: "CYCLE DE VIE",
              desc: "Plus de 3000 cycles de charge pour une longévité extrême.",
            },
            {
              icon: "science",
              title: "MATÉRIAUX",
              desc: "Lithium Fer Phosphate pour une stabilité supérieure.",
            },
          ],
        },
        performance: {
          title: "Transmission Intégrale Électrique",
          description:
            "Un système à double moteur délivrant 363 kW. Le système ajuste le couple en millisecondes.",
          bullets: [
            "Équivalent à 494 Chevaux",
            "Couple de pointe 680 Nm",
            "Système de freinage Brembo",
          ],
          stat: "3.9",
          statLabel: "Secondes de 0 à 100km/h",
        },
        gallery: {
          label: "Vitrine Extérieure",
          title: "Perfection Visuelle Sous Tous les Angles",
        },
        interior: {
          title: "Votre Sanctuaire Privé",
          description:
            "Entrez dans le luxe soigné avec du cuir Nappa et des accents d'aluminium.",
          features: [
            {
              title: "Affichage Adaptatif",
              desc: "Un écran ultra-HD rotatif de 15,6 pouces qui s'adapte à votre angle préféré.",
            },
            {
              title: "Luxe Nappa",
              desc: "Des cuirs haut de gamme offrant une expérience tactile à la fois douce et durable.",
            },
            {
              title: "Perfection Sonore",
              desc: "Un système audio Dynaudio avec 12 haut-parleurs.",
            },
          ],
        },
        safety: {
          title: "DiPilot : Le Gardien Intelligent",
          features: [
            {
              icon: "sensors",
              title: "22 Capteurs de Précision",
              desc: "Équipé de 12 radars ultrasoniques et de 5 caméras haute définition.",
            },
            {
              icon: "psychology",
              title: "Niveau d'autonomie 2+",
              desc: "Maintien de voie avancé et freinage d'urgence automatique.",
            },
          ],
        },
        heritage: {
          title: "Un Héritage d'Innovation",
          description: "Skyline Motors est fier de s'associer à BYD.",
        },
        ctaSupport: {
          title: "Scellez l'Excellence",
          description:
            "Finalisez votre acquisition avec nos spécialistes qualifiés.",
          btn: "Discuter avec un Spécialiste",
        },
        ctaEnd: {
          title: "L'AVENIR EST LÀ.",
          description:
            "Votre voyage dans le sommet de la performance commence par un essai.",
          btnPrimary: "RÉSERVER MAINTENANT",
          btnSecondary: "CONFIGUREZ VOTRE HAN",
          footer: "L'exclusivité est la norme. L'innovation est obligatoire.",
        },
      },
      sw: {
        hero: {
          title: "BYD Han EV:",
          subtitle: "Kilele cha Utendaji",
          description:
            "Pata uzoefu wa kilele cha uhandisi wa umeme, ambapo anasa inakutana na wepesi.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Masafa ya NEDC",
          cdLabel: "Thamani ya Cd",
          btnConfigure: "SANIDI HAN YAKO",
          btnDiscover: "GUNDUA ZAIDI",
        },
        philosophy: {
          label: "Falsafa",
          title: "Uzuri Unakutana na Ujuzi",
          description:
            "BYD Han EV ni zaidi ya gari; ni taarifa ya dhamira. Imeongozwa na nguvu na neema ya uzuri wa Mashariki.",
          quote:
            '"Hatukujenga gari tu. Tulibuni patakatifu pa barabara, ambapo kila hisia inatumikia faraja ya dereva."',
        },
        video: {
          title: "Pata Uzoefu wa Mwendo",
        },
        exterior: {
          label: "Umahiri wa Kuona",
          title: "Lugha ya Kubuni ya Uso wa Joka",
          description: "Mchanganyiko wa uzuri na ufanisi.",
          feature1Title: "Kuwepo kwa Mwangaza",
          feature1Desc:
            "Taa zinazobadilika za LED matrix zilizoongozwa na macho makali ya joka.",
          feature2Title: "Uchongaji wa Aerodinamika",
          feature2Desc: "Kila mzingo una kusudi, kuhakikisha ufanisi mkubwa.",
        },
        battery: {
          label: "Nguvu ya Msingi",
          title: "Betri ya Blade ya Mapinduzi",
          description:
            "Usalama sio hiari; ni msingi. Betri hupita majaribio magumu zaidi.",
          features: [
            {
              icon: "verified",
              title: "USALAMA USIOLINGANA",
              desc: "Muundo thabiti sugu kwa joto kupita kiasi.",
            },
            {
              icon: "bolt",
              title: "UCHAJI WA HARAKA SANA",
              desc: "Chaji kutoka 30% hadi 80% ndani ya dakika 25.",
            },
            {
              icon: "battery_charging_full",
              title: "UZITO WA NISHATI",
              desc: "150 Wh/kg imeboreshwa kwa ufanisi.",
            },
            {
              icon: "thermostat",
              title: "USIMAMIZI WA JOTO",
              desc: "Mfumo wa hali ya juu wa kupoeza kioevu.",
            },
            {
              icon: "update",
              title: "MZUNGUKO WA MAISHA",
              desc: "Mizunguko zaidi ya 3000 kwa maisha marefu.",
            },
            {
              icon: "science",
              title: "NYENZO",
              desc: "Lithium Iron Phosphate kwa usalama.",
            },
          ],
        },
        performance: {
          title: "Uendeshaji wa Umeme",
          description: "Mfumo wa injini mbili unatoa nguvu ya kW 363.",
          bullets: [
            "Sawa na Nguvu za Farasi 494",
            "Mzunguko wa 680 Nm",
            "Mfumo wa Breki wa Brembo",
          ],
          stat: "3.9",
          statLabel: "Sekunde hadi 100km/h",
        },
        gallery: {
          label: "Maonyesho ya Nje",
          title: "Ukamilifu Kutoka Kila Upande",
        },
        interior: {
          title: "Patakatifu Pako pa Kibinafsi",
          description:
            "Ingia katika ulimwengu wa anasa. Ngozi ya Nappa inayoshonwa kwa mkono.",
          features: [
            {
              title: "Unyumbufu wa Skrini",
              desc: "Skrini inayozunguka inayoendana na wewe.",
            },
            {
              title: "Anasa ya Nappa",
              desc: "Ngozi za hali ya juu.",
            },
            {
              title: "Ukamilifu wa Sauti",
              desc: "Mfumo wa sauti na wasemaji 12.",
            },
          ],
        },
        safety: {
          title: "Mlinzi mwenye Akili",
          features: [
            {
              icon: "sensors",
              title: "Sensorer 22 za Usahihi",
              desc: "Imejaa kamera za hali ya juu.",
            },
            {
              icon: "psychology",
              title: "Kiwango cha Kujitawala",
              desc: "Uwezaji wa njia za kujiendesha.",
            },
          ],
        },
        heritage: {
          title: "Urithi wa Ubunifu",
          description: "Hatua za ubunifu endelevu.",
        },
        ctaSupport: {
          title: "Ungana na Wataalamu",
          description: "Zungumza na wataalamu.",
          btn: "Sema Nasi",
        },
        ctaEnd: {
          title: "Yajayo yapo SASA.",
          description: "Jaribu leo.",
          btnPrimary: "HIFADHI SASA",
          btnSecondary: "Angalia usanidi",
          footer: "Ugunduzi ni muhimu.",
        },
      },
      rn: {
        hero: {
          title: "BYD Han EV:",
          subtitle: "Urwego rw'Iterambere",
          description: "Gerageza ibyiza by'ikoranabuhanga n'ubwiza.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Urugendo rwa NEDC",
          cdLabel: "Agaciro ka Cd",
          btnConfigure: "HINDURA IMODOKA",
          btnDiscover: "VUMBURA",
        },
        philosophy: {
          label: "Filozofiya yacu",
          title: "Ubwiza n'Ubumenyi",
          description: 'Iyi modoka ifite umwihariko wa "Dragon Face".',
          quote: "Imodoka yacu iha amahoro uyihatwaye.",
        },
        video: {
          title: "Reba Urugendo",
        },
        exterior: {
          label: "Ubwiza",
          title: "Imiterere",
          description: "Inkoramutima z'imvaho za aerodynamics.",
          feature1Title: "Amatara y'Imbere",
          feature1Desc: "Amatara meza cyane ya LED.",
          feature2Title: "Ubwiza bwemeza",
          feature2Desc: "Amabara ahamye n'imiterere inoze.",
        },
        battery: {
          label: "Ingufu nyamukuru",
          title: "Batiri nziza cyane",
          description: "Ikoresha uburyo bugezweho.",
          features: [
            {
              icon: "verified",
              title: "UMUTEKANO",
              desc: "Iterambere riteye imbere.",
            },
            {
              icon: "bolt",
              title: "KWINJIZA UMURIRO",
              desc: "Ikirangirira vuba.",
            },
            {
              icon: "battery_charging_full",
              title: "INGUFU ZIHAGIJE",
              desc: "Ikoresha umuriro muke.",
            },
            {
              icon: "thermostat",
              title: "GUKONJESHA",
              desc: "Uburyo bwo gukonjesha bwihariye.",
            },
            {
              icon: "update",
              title: "KRAMBARA",
              desc: "Ikomeza kubaho umwanya munini.",
            },
            {
              icon: "science",
              title: "IMBONEKARIKANWA",
              desc: "Ubuziranenge buhambaye.",
            },
          ],
        },
        performance: {
          title: "Urugendo rwiza",
          description: "Ingufu zo hejuru.",
          bullets: ["Ingufu zigezweho", "Imikorere myiza", "Feri ya Brembo"],
          stat: "3.9",
          statLabel: "Imasegonda kugeza 100km/h",
        },
        gallery: {
          label: "Ifoto nini",
          title: "Iraboneka Hose",
        },
        interior: {
          title: "Imbere hezam",
          description: "Hateguwe mu buryo bwa Nappa.",
          features: [
            {
              title: "Ibikoresho",
              desc: "Ekarayi igenda ihinduka.",
            },
            {
              title: "Nappa nziza",
              desc: "Irinezwe neza.",
            },
            {
              title: "Amajwi Meza",
              desc: "Indangururamajwi nziza.",
            },
          ],
        },
        safety: {
          title: "Uburinzi",
          features: [
            {
              icon: "sensors",
              title: "Igenzura",
              desc: "Igenzura nziza ihora ijora.",
            },
            {
              icon: "psychology",
              title: "Ubushishozi",
              desc: "Ikora isuzuma hakiri kare.",
            },
          ],
        },
        heritage: {
          title: "Iterambere",
          description: "Ubufatanye bukomeye na BYD.",
        },
        ctaSupport: {
          title: "Tubaze",
          description: "Baza ikiganiro cyihariye.",
          btn: "Ganira natwe",
        },
        ctaEnd: {
          title: "UBU",
          description: "Tujyanye.",
          btnPrimary: "BIKA UBU NYENE",
          btnSecondary: "GENZURA IBYEREKEYE IMODOKA YANJYE",
          footer: "Ikora cyane kandi niyo ishyigikiwe.",
        },
      },
    },
  },
  "mg-marvel-r": {
    id: "mg-marvel-r",
    name: "MG Marvel R",
    tag1: "SUV Specialist",
    tag2: "Electric",
    summarySpecs: [
      {
        label: "Range",
        value: "402",
        unit: "KM",
      },
      {
        label: "0-100 km/h",
        value: "4.9",
        unit: "SEC",
      },
      {
        label: "Max Power",
        value: "288",
        unit: "HP",
      },
    ],
    images: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0DB7In5d8jXGXTuYB-KcKqMzzkhNKfWotga3ItZtqNFwFf2-N9lbp9reuNhl58fBhhobgzUHHek8BlR2Iumh0LVOax6YY2zikjdrm4QFZ1qqWGhgGPoltbxszFK5UTKWtvh29lHOrAFjM1rojlz089qs8L34J2f8NJISklx5swYElV2-32b4azT-kvqGIMLrIqpQZI46-WqM4ZuNBuDkbA_QfYzCMOYzWLkEeE6nEfrv_xLS-md5gGUUN-KGuQn5-Zp77PjmY75Vp",
      exteriorMain:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0DB7In5d8jXGXTuYB-KcKqMzzkhNKfWotga3ItZtqNFwFf2-N9lbp9reuNhl58fBhhobgzUHHek8BlR2Iumh0LVOax6YY2zikjdrm4QFZ1qqWGhgGPoltbxszFK5UTKWtvh29lHOrAFjM1rojlz089qs8L34J2f8NJISklx5swYElV2-32b4azT-kvqGIMLrIqpQZI46-WqM4ZuNBuDkbA_QfYzCMOYzWLkEeE6nEfrv_xLS-md5gGUUN-KGuQn5-Zp77PjmY75Vp",
      philosophyImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0DB7In5d8jXGXTuYB-KcKqMzzkhNKfWotga3ItZtqNFwFf2-N9lbp9reuNhl58fBhhobgzUHHek8BlR2Iumh0LVOax6YY2zikjdrm4QFZ1qqWGhgGPoltbxszFK5UTKWtvh29lHOrAFjM1rojlz089qs8L34J2f8NJISklx5swYElV2-32b4azT-kvqGIMLrIqpQZI46-WqM4ZuNBuDkbA_QfYzCMOYzWLkEeE6nEfrv_xLS-md5gGUUN-KGuQn5-Zp77PjmY75Vp",
      videoPoster: "",
      gallery: [],
      interior: [],
      brandLogo: "",
      ctaBg: "",
      batteryBg: "",
    },
    specs: {
      acceleration: "4.9s",
      range: "402km",
      cdValue: "0.28",
    },
    i18n: {
      en: {
        hero: {
          title: "MG Marvel R:",
          subtitle: "Tech-Forward SUV",
          description:
            "Experience the zenith of electric engineering, where luxury meets lightning-fast agility.",
          accelLabel: "0-100 km/h",
          rangeLabel: "NEDC Range",
          cdLabel: "Cd Value",
          btnConfigure: "CONFIGURE YOUR HAN",
          btnDiscover: "DISCOVER MORE",
        },
        philosophy: {
          label: "The Philosophy",
          title: "Elegance Meets Intelligence",
          description:
            'The BYD Han EV is more than a vehicle; it is a statement of intent. Inspired by the strength and grace of Eastern aesthetics, the Han combines traditional "Dragon Face" design elements with the cutting-edge requirements of modern electric performance.',
          quote:
            "\"We didn't just build a car. We designed a sanctuary for the road, where every stitch and every sensor serves the driver's ultimate comfort and control.\"",
        },
        video: {
          title: "Experience the Motion",
        },
        exterior: {
          label: "Visual Mastery",
          title: "Dragon Face Design Language",
          description:
            "A harmonious blend of aesthetic beauty and aerodynamic efficiency, boasting a coefficient of drag of just 0.233.",
          feature1Title: "Illuminating Presence",
          feature1Desc:
            "Adaptive LED matrix headlamps inspired by the intense gaze of a dragon, slicing through the darkness with crystalline precision.",
          feature2Title: "Aerodynamic Sculpting",
          feature2Desc:
            "Every curve is intentional. Retractable door handles and a streamlined floorpan ensure maximum efficiency and whisper-quiet operation.",
        },
        battery: {
          label: "The Core Power",
          title: "Revolutionary Blade Battery",
          description:
            "Safety is not an option; it is the foundation. The BYD Blade Battery passes the most rigorous nail penetration tests, ensuring thermal stability that leads the industry.",
          features: [
            {
              icon: "verified",
              title: "UNMATCHED SAFETY",
              desc: "Highly stable structure resistant to thermal runaway even under extreme conditions.",
            },
            {
              icon: "bolt",
              title: "ULTRA-FAST CHARGING",
              desc: "Charge from 30% to 80% in just 25 minutes using high-speed DC architecture.",
            },
            {
              icon: "battery_charging_full",
              title: "ENERGY DENSITY",
              desc: "150 Wh/kg optimized for long-range efficiency.",
            },
            {
              icon: "thermostat",
              title: "THERMAL MANAGEMENT",
              desc: "Advanced liquid cooling and heating system for peak performance in all climates.",
            },
            {
              icon: "update",
              title: "LIFECYCLE",
              desc: "3000+ charge cycles (approx. 1.2 million km) for extreme longevity.",
            },
            {
              icon: "science",
              title: "MATERIAL",
              desc: "Lithium Iron Phosphate (LFP) chemistry for superior stability and sustainability.",
            },
          ],
        },
        performance: {
          title: "Electric All-Wheel Drive",
          description:
            "A dual-motor system delivering 363 kW of power. The intelligent AWD system adjusts torque in milliseconds, providing supercar levels of traction and handling.",
          bullets: [
            "494 Horsepower Equivalent",
            "680 Nm Peak Torque",
            "Brembo Braking System",
          ],
          stat: "3.9",
          statLabel: "Seconds to 100km/h",
        },
        gallery: {
          label: "Exterior Showcase",
          title: "Visual Perfection from Every Angle",
        },
        interior: {
          title: "Your Private Sanctuary",
          description:
            "Step into a world of curated luxury. Hand-stitched Nappa leather, authentic wood veneers, and aluminum accents create an environment of unparalleled refinement.",
          features: [
            {
              title: "Adaptive Display",
              desc: "A 15.6-inch ultra-HD rotatable screen that adapts to your preferred viewing angle for navigation or entertainment.",
            },
            {
              title: "Nappa Luxury",
              desc: "Premium hides sourced from top-tier tanneries, offering a tactile experience that is both soft and exceptionally durable.",
            },
            {
              title: "Sonic Perfection",
              desc: "A custom-tuned Dynaudio premium sound system with 12 speakers delivering a concert-hall experience in total silence.",
            },
          ],
        },
        safety: {
          title: "DiPilot: The Intelligent Guardian",
          features: [
            {
              icon: "sensors",
              title: "22 Precision Sensors",
              desc: "Equipped with 12 ultrasonic radars and 5 high-definition cameras for 360-degree environmental awareness.",
            },
            {
              icon: "psychology",
              title: "Level 2+ Autonomy",
              desc: "Advanced lane-keeping, adaptive cruise control, and automatic emergency braking for a fatigue-free driving experience.",
            },
          ],
        },
        heritage: {
          title: "A Legacy of Innovation",
          description:
            "Skyline Motors is proud to partner with BYD, the global leader in new energy vehicles, to bring the pinnacle of electric excellence to our most discerning clientele.",
        },
        ctaSupport: {
          title: "Seal the Excellence",
          description:
            "Finalize your acquisition or consult with our master specialists regarding bespoke configurations. Precision service is only a conversation away.",
          btn: "Chat with a Specialist",
        },
        ctaEnd: {
          title: "THE FUTURE IS NOW.",
          description:
            "Your journey into the apex of performance begins with a single drive.",
          btnPrimary: "RESERVE NOW",
          btnSecondary: "CONFIGURE YOUR HAN",
          footer: "Exclusivity is standard. Innovation is mandatory.",
        },
      },
      fr: {
        hero: {
          title: "MG Marvel R:",
          subtitle: "Tech-Forward SUV",
          description:
            "Faites l'expérience du zénith de l'ingénierie électrique, où le luxe rencontre une agilité foudroyante.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Autonomie NEDC",
          cdLabel: "Valeur Cd",
          btnConfigure: "CONFIGUREZ VOTRE HAN",
          btnDiscover: "DÉCOUVREZ PLUS",
        },
        philosophy: {
          label: "La Philosophie",
          title: "L'Élégance Rencontre L'Intelligence",
          description:
            "Le BYD Han EV est plus qu'un véhicule ; c'est une déclaration d'intention. Inspiré par la force et la grâce de l'esthétique orientale, le Han combine les éléments de design traditionnels \"Dragon Face\" avec les exigences de pointe de la performance électrique moderne.",
          quote:
            '"Nous n\'avons pas seulement construit une voiture. Nous avons conçu un sanctuaire pour la route, où chaque capteur sert le confort et le contrôle du conducteur."',
        },
        video: {
          title: "Vivez le Mouvement",
        },
        exterior: {
          label: "Maîtrise Visuelle",
          title: "Langage Design Dragon Face",
          description:
            "Un mélange harmonieux de beauté esthétique et d'efficacité aérodynamique, avec un coefficient de traînée de seulement 0,233.",
          feature1Title: "Présence Illuminatrice",
          feature1Desc:
            "Phares LED adaptatifs Matrix inspirés par le regard intense d'un dragon, perçant l'obscurité avec précision.",
          feature2Title: "Sculpture Aérodynamique",
          feature2Desc:
            "Chaque courbe est intentionnelle. Les poignées de porte rétractables assurent une efficacité maximale et un fonctionnement silencieux.",
        },
        battery: {
          label: "La Puissance Centrale",
          title: "Batterie Lame Révolutionnaire",
          description:
            "La sécurité n'est pas une option. La Batterie Lame BYD passe les tests de pénétration de clous les plus rigoureux, assurant une stabilité thermique leader de l'industrie.",
          features: [
            {
              icon: "verified",
              title: "SÉCURITÉ INÉGALÉE",
              desc: "Structure très stable, résistante à l'emballement thermique.",
            },
            {
              icon: "bolt",
              title: "RECHARGE ULTRA-RAPIDE",
              desc: "Chargez de 30% à 80% en seulement 25 minutes.",
            },
            {
              icon: "battery_charging_full",
              title: "DENSITÉ ÉNERGÉTIQUE",
              desc: "150 Wh/kg optimisé pour l'efficacité.",
            },
            {
              icon: "thermostat",
              title: "GESTION THERMIQUE",
              desc: "Système de refroidissement liquide avancé.",
            },
            {
              icon: "update",
              title: "CYCLE DE VIE",
              desc: "Plus de 3000 cycles de charge pour une longévité extrême.",
            },
            {
              icon: "science",
              title: "MATÉRIAUX",
              desc: "Lithium Fer Phosphate pour une stabilité supérieure.",
            },
          ],
        },
        performance: {
          title: "Transmission Intégrale Électrique",
          description:
            "Un système à double moteur délivrant 363 kW. Le système ajuste le couple en millisecondes.",
          bullets: [
            "Équivalent à 494 Chevaux",
            "Couple de pointe 680 Nm",
            "Système de freinage Brembo",
          ],
          stat: "3.9",
          statLabel: "Secondes de 0 à 100km/h",
        },
        gallery: {
          label: "Vitrine Extérieure",
          title: "Perfection Visuelle Sous Tous les Angles",
        },
        interior: {
          title: "Votre Sanctuaire Privé",
          description:
            "Entrez dans le luxe soigné avec du cuir Nappa et des accents d'aluminium.",
          features: [
            {
              title: "Affichage Adaptatif",
              desc: "Un écran ultra-HD rotatif de 15,6 pouces qui s'adapte à votre angle préféré.",
            },
            {
              title: "Luxe Nappa",
              desc: "Des cuirs haut de gamme offrant une expérience tactile à la fois douce et durable.",
            },
            {
              title: "Perfection Sonore",
              desc: "Un système audio Dynaudio avec 12 haut-parleurs.",
            },
          ],
        },
        safety: {
          title: "DiPilot : Le Gardien Intelligent",
          features: [
            {
              icon: "sensors",
              title: "22 Capteurs de Précision",
              desc: "Équipé de 12 radars ultrasoniques et de 5 caméras haute définition.",
            },
            {
              icon: "psychology",
              title: "Niveau d'autonomie 2+",
              desc: "Maintien de voie avancé et freinage d'urgence automatique.",
            },
          ],
        },
        heritage: {
          title: "Un Héritage d'Innovation",
          description: "Skyline Motors est fier de s'associer à BYD.",
        },
        ctaSupport: {
          title: "Scellez l'Excellence",
          description:
            "Finalisez votre acquisition avec nos spécialistes qualifiés.",
          btn: "Discuter avec un Spécialiste",
        },
        ctaEnd: {
          title: "L'AVENIR EST LÀ.",
          description:
            "Votre voyage dans le sommet de la performance commence par un essai.",
          btnPrimary: "RÉSERVER MAINTENANT",
          btnSecondary: "CONFIGUREZ VOTRE HAN",
          footer: "L'exclusivité est la norme. L'innovation est obligatoire.",
        },
      },
      sw: {
        hero: {
          title: "MG Marvel R:",
          subtitle: "Tech-Forward SUV",
          description:
            "Pata uzoefu wa kilele cha uhandisi wa umeme, ambapo anasa inakutana na wepesi.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Masafa ya NEDC",
          cdLabel: "Thamani ya Cd",
          btnConfigure: "SANIDI HAN YAKO",
          btnDiscover: "GUNDUA ZAIDI",
        },
        philosophy: {
          label: "Falsafa",
          title: "Uzuri Unakutana na Ujuzi",
          description:
            "BYD Han EV ni zaidi ya gari; ni taarifa ya dhamira. Imeongozwa na nguvu na neema ya uzuri wa Mashariki.",
          quote:
            '"Hatukujenga gari tu. Tulibuni patakatifu pa barabara, ambapo kila hisia inatumikia faraja ya dereva."',
        },
        video: {
          title: "Pata Uzoefu wa Mwendo",
        },
        exterior: {
          label: "Umahiri wa Kuona",
          title: "Lugha ya Kubuni ya Uso wa Joka",
          description: "Mchanganyiko wa uzuri na ufanisi.",
          feature1Title: "Kuwepo kwa Mwangaza",
          feature1Desc:
            "Taa zinazobadilika za LED matrix zilizoongozwa na macho makali ya joka.",
          feature2Title: "Uchongaji wa Aerodinamika",
          feature2Desc: "Kila mzingo una kusudi, kuhakikisha ufanisi mkubwa.",
        },
        battery: {
          label: "Nguvu ya Msingi",
          title: "Betri ya Blade ya Mapinduzi",
          description:
            "Usalama sio hiari; ni msingi. Betri hupita majaribio magumu zaidi.",
          features: [
            {
              icon: "verified",
              title: "USALAMA USIOLINGANA",
              desc: "Muundo thabiti sugu kwa joto kupita kiasi.",
            },
            {
              icon: "bolt",
              title: "UCHAJI WA HARAKA SANA",
              desc: "Chaji kutoka 30% hadi 80% ndani ya dakika 25.",
            },
            {
              icon: "battery_charging_full",
              title: "UZITO WA NISHATI",
              desc: "150 Wh/kg imeboreshwa kwa ufanisi.",
            },
            {
              icon: "thermostat",
              title: "USIMAMIZI WA JOTO",
              desc: "Mfumo wa hali ya juu wa kupoeza kioevu.",
            },
            {
              icon: "update",
              title: "MZUNGUKO WA MAISHA",
              desc: "Mizunguko zaidi ya 3000 kwa maisha marefu.",
            },
            {
              icon: "science",
              title: "NYENZO",
              desc: "Lithium Iron Phosphate kwa usalama.",
            },
          ],
        },
        performance: {
          title: "Uendeshaji wa Umeme",
          description: "Mfumo wa injini mbili unatoa nguvu ya kW 363.",
          bullets: [
            "Sawa na Nguvu za Farasi 494",
            "Mzunguko wa 680 Nm",
            "Mfumo wa Breki wa Brembo",
          ],
          stat: "3.9",
          statLabel: "Sekunde hadi 100km/h",
        },
        gallery: {
          label: "Maonyesho ya Nje",
          title: "Ukamilifu Kutoka Kila Upande",
        },
        interior: {
          title: "Patakatifu Pako pa Kibinafsi",
          description:
            "Ingia katika ulimwengu wa anasa. Ngozi ya Nappa inayoshonwa kwa mkono.",
          features: [
            {
              title: "Unyumbufu wa Skrini",
              desc: "Skrini inayozunguka inayoendana na wewe.",
            },
            {
              title: "Anasa ya Nappa",
              desc: "Ngozi za hali ya juu.",
            },
            {
              title: "Ukamilifu wa Sauti",
              desc: "Mfumo wa sauti na wasemaji 12.",
            },
          ],
        },
        safety: {
          title: "Mlinzi mwenye Akili",
          features: [
            {
              icon: "sensors",
              title: "Sensorer 22 za Usahihi",
              desc: "Imejaa kamera za hali ya juu.",
            },
            {
              icon: "psychology",
              title: "Kiwango cha Kujitawala",
              desc: "Uwezaji wa njia za kujiendesha.",
            },
          ],
        },
        heritage: {
          title: "Urithi wa Ubunifu",
          description: "Hatua za ubunifu endelevu.",
        },
        ctaSupport: {
          title: "Ungana na Wataalamu",
          description: "Zungumza na wataalamu.",
          btn: "Sema Nasi",
        },
        ctaEnd: {
          title: "Yajayo yapo SASA.",
          description: "Jaribu leo.",
          btnPrimary: "HIFADHI SASA",
          btnSecondary: "Angalia usanidi",
          footer: "Ugunduzi ni muhimu.",
        },
      },
      rn: {
        hero: {
          title: "MG Marvel R:",
          subtitle: "Tech-Forward SUV",
          description: "Gerageza ibyiza by'ikoranabuhanga n'ubwiza.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Urugendo rwa NEDC",
          cdLabel: "Agaciro ka Cd",
          btnConfigure: "HINDURA IMODOKA",
          btnDiscover: "VUMBURA",
        },
        philosophy: {
          label: "Filozofiya yacu",
          title: "Ubwiza n'Ubumenyi",
          description: 'Iyi modoka ifite umwihariko wa "Dragon Face".',
          quote: "Imodoka yacu iha amahoro uyihatwaye.",
        },
        video: {
          title: "Reba Urugendo",
        },
        exterior: {
          label: "Ubwiza",
          title: "Imiterere",
          description: "Inkoramutima z'imvaho za aerodynamics.",
          feature1Title: "Amatara y'Imbere",
          feature1Desc: "Amatara meza cyane ya LED.",
          feature2Title: "Ubwiza bwemeza",
          feature2Desc: "Amabara ahamye n'imiterere inoze.",
        },
        battery: {
          label: "Ingufu nyamukuru",
          title: "Batiri nziza cyane",
          description: "Ikoresha uburyo bugezweho.",
          features: [
            {
              icon: "verified",
              title: "UMUTEKANO",
              desc: "Iterambere riteye imbere.",
            },
            {
              icon: "bolt",
              title: "KWINJIZA UMURIRO",
              desc: "Ikirangirira vuba.",
            },
            {
              icon: "battery_charging_full",
              title: "INGUFU ZIHAGIJE",
              desc: "Ikoresha umuriro muke.",
            },
            {
              icon: "thermostat",
              title: "GUKONJESHA",
              desc: "Uburyo bwo gukonjesha bwihariye.",
            },
            {
              icon: "update",
              title: "KRAMBARA",
              desc: "Ikomeza kubaho umwanya munini.",
            },
            {
              icon: "science",
              title: "IMBONEKARIKANWA",
              desc: "Ubuziranenge buhambaye.",
            },
          ],
        },
        performance: {
          title: "Urugendo rwiza",
          description: "Ingufu zo hejuru.",
          bullets: ["Ingufu zigezweho", "Imikorere myiza", "Feri ya Brembo"],
          stat: "3.9",
          statLabel: "Imasegonda kugeza 100km/h",
        },
        gallery: {
          label: "Ifoto nini",
          title: "Iraboneka Hose",
        },
        interior: {
          title: "Imbere hezam",
          description: "Hateguwe mu buryo bwa Nappa.",
          features: [
            {
              title: "Ibikoresho",
              desc: "Ekarayi igenda ihinduka.",
            },
            {
              title: "Nappa nziza",
              desc: "Irinezwe neza.",
            },
            {
              title: "Amajwi Meza",
              desc: "Indangururamajwi nziza.",
            },
          ],
        },
        safety: {
          title: "Uburinzi",
          features: [
            {
              icon: "sensors",
              title: "Igenzura",
              desc: "Igenzura nziza ihora ijora.",
            },
            {
              icon: "psychology",
              title: "Ubushishozi",
              desc: "Ikora isuzuma hakiri kare.",
            },
          ],
        },
        heritage: {
          title: "Iterambere",
          description: "Ubufatanye bukomeye na BYD.",
        },
        ctaSupport: {
          title: "Tubaze",
          description: "Baza ikiganiro cyihariye.",
          btn: "Ganira natwe",
        },
        ctaEnd: {
          title: "UBU",
          description: "Tujyanye.",
          btnPrimary: "BIKA UBU NYENE",
          btnSecondary: "GENZURA IBYEREKEYE IMODOKA YANJYE",
          footer: "Ikora cyane kandi niyo ishyigikiwe.",
        },
      },
    },
  },
  "toyota-bz4x": {
    id: "toyota-bz4x",
    name: "Toyota bZ4X",
    tag1: "Reliability Redefined",
    tag2: "Electric",
    summarySpecs: [
      {
        label: "Range",
        value: "516",
        unit: "KM",
      },
      {
        label: "Battery",
        value: "71.4",
        unit: "KWH",
      },
      {
        label: "Drive",
        value: "AWD",
        unit: "OPT.",
      },
    ],
    images: {
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoAuCOomkMpnKynzMKemd_v9ACt8cMa90oHP6vu8xPmbp0x8n5o5_YBp5PNyf_mYR55jFHrEmAjQNHgH11IkiIf2xDiNjkCgrukE87JAthMYJ33zALgR_iuMZPLrEQmRu5k7ZHnbjuVVvlBiWcQnsnGU9-np-Em5WneUMcgZxAA0XE4MpvjlillkAwJSCVSTJSxORJ1JK6W-l1pJSZWKTsLFhjHn2wE2ocU07NFJDVzyA9A5wajbwPkXMSj7ZDmGSj7vQQ5Q8IRYFE",
      exteriorMain:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoAuCOomkMpnKynzMKemd_v9ACt8cMa90oHP6vu8xPmbp0x8n5o5_YBp5PNyf_mYR55jFHrEmAjQNHgH11IkiIf2xDiNjkCgrukE87JAthMYJ33zALgR_iuMZPLrEQmRu5k7ZHnbjuVVvlBiWcQnsnGU9-np-Em5WneUMcgZxAA0XE4MpvjlillkAwJSCVSTJSxORJ1JK6W-l1pJSZWKTsLFhjHn2wE2ocU07NFJDVzyA9A5wajbwPkXMSj7ZDmGSj7vQQ5Q8IRYFE",
      philosophyImage: "",
      videoPoster: "",
      gallery: [],
      interior: [],
      brandLogo: "",
      ctaBg: "",
      batteryBg: "",
    },
    specs: {
      acceleration: "6.9s",
      range: "516km",
      cdValue: "0.29",
    },
    i18n: {
      en: {
        hero: {
          title: "Toyota bZ4X:",
          subtitle: "Reliability Redefined",
          description:
            "Experience the zenith of electric engineering, where luxury meets lightning-fast agility.",
          accelLabel: "0-100 km/h",
          rangeLabel: "NEDC Range",
          cdLabel: "Cd Value",
          btnConfigure: "CONFIGURE YOUR HAN",
          btnDiscover: "DISCOVER MORE",
        },
        philosophy: {
          label: "The Philosophy",
          title: "Elegance Meets Intelligence",
          description:
            'The BYD Han EV is more than a vehicle; it is a statement of intent. Inspired by the strength and grace of Eastern aesthetics, the Han combines traditional "Dragon Face" design elements with the cutting-edge requirements of modern electric performance.',
          quote:
            "\"We didn't just build a car. We designed a sanctuary for the road, where every stitch and every sensor serves the driver's ultimate comfort and control.\"",
        },
        video: {
          title: "Experience the Motion",
        },
        exterior: {
          label: "Visual Mastery",
          title: "Dragon Face Design Language",
          description:
            "A harmonious blend of aesthetic beauty and aerodynamic efficiency, boasting a coefficient of drag of just 0.233.",
          feature1Title: "Illuminating Presence",
          feature1Desc:
            "Adaptive LED matrix headlamps inspired by the intense gaze of a dragon, slicing through the darkness with crystalline precision.",
          feature2Title: "Aerodynamic Sculpting",
          feature2Desc:
            "Every curve is intentional. Retractable door handles and a streamlined floorpan ensure maximum efficiency and whisper-quiet operation.",
        },
        battery: {
          label: "The Core Power",
          title: "Revolutionary Blade Battery",
          description:
            "Safety is not an option; it is the foundation. The BYD Blade Battery passes the most rigorous nail penetration tests, ensuring thermal stability that leads the industry.",
          features: [
            {
              icon: "verified",
              title: "UNMATCHED SAFETY",
              desc: "Highly stable structure resistant to thermal runaway even under extreme conditions.",
            },
            {
              icon: "bolt",
              title: "ULTRA-FAST CHARGING",
              desc: "Charge from 30% to 80% in just 25 minutes using high-speed DC architecture.",
            },
            {
              icon: "battery_charging_full",
              title: "ENERGY DENSITY",
              desc: "150 Wh/kg optimized for long-range efficiency.",
            },
            {
              icon: "thermostat",
              title: "THERMAL MANAGEMENT",
              desc: "Advanced liquid cooling and heating system for peak performance in all climates.",
            },
            {
              icon: "update",
              title: "LIFECYCLE",
              desc: "3000+ charge cycles (approx. 1.2 million km) for extreme longevity.",
            },
            {
              icon: "science",
              title: "MATERIAL",
              desc: "Lithium Iron Phosphate (LFP) chemistry for superior stability and sustainability.",
            },
          ],
        },
        performance: {
          title: "Electric All-Wheel Drive",
          description:
            "A dual-motor system delivering 363 kW of power. The intelligent AWD system adjusts torque in milliseconds, providing supercar levels of traction and handling.",
          bullets: [
            "494 Horsepower Equivalent",
            "680 Nm Peak Torque",
            "Brembo Braking System",
          ],
          stat: "3.9",
          statLabel: "Seconds to 100km/h",
        },
        gallery: {
          label: "Exterior Showcase",
          title: "Visual Perfection from Every Angle",
        },
        interior: {
          title: "Your Private Sanctuary",
          description:
            "Step into a world of curated luxury. Hand-stitched Nappa leather, authentic wood veneers, and aluminum accents create an environment of unparalleled refinement.",
          features: [
            {
              title: "Adaptive Display",
              desc: "A 15.6-inch ultra-HD rotatable screen that adapts to your preferred viewing angle for navigation or entertainment.",
            },
            {
              title: "Nappa Luxury",
              desc: "Premium hides sourced from top-tier tanneries, offering a tactile experience that is both soft and exceptionally durable.",
            },
            {
              title: "Sonic Perfection",
              desc: "A custom-tuned Dynaudio premium sound system with 12 speakers delivering a concert-hall experience in total silence.",
            },
          ],
        },
        safety: {
          title: "DiPilot: The Intelligent Guardian",
          features: [
            {
              icon: "sensors",
              title: "22 Precision Sensors",
              desc: "Equipped with 12 ultrasonic radars and 5 high-definition cameras for 360-degree environmental awareness.",
            },
            {
              icon: "psychology",
              title: "Level 2+ Autonomy",
              desc: "Advanced lane-keeping, adaptive cruise control, and automatic emergency braking for a fatigue-free driving experience.",
            },
          ],
        },
        heritage: {
          title: "A Legacy of Innovation",
          description:
            "Skyline Motors is proud to partner with BYD, the global leader in new energy vehicles, to bring the pinnacle of electric excellence to our most discerning clientele.",
        },
        ctaSupport: {
          title: "Seal the Excellence",
          description:
            "Finalize your acquisition or consult with our master specialists regarding bespoke configurations. Precision service is only a conversation away.",
          btn: "Chat with a Specialist",
        },
        ctaEnd: {
          title: "THE FUTURE IS NOW.",
          description:
            "Your journey into the apex of performance begins with a single drive.",
          btnPrimary: "RESERVE NOW",
          btnSecondary: "CONFIGURE YOUR HAN",
          footer: "Exclusivity is standard. Innovation is mandatory.",
        },
      },
      fr: {
        hero: {
          title: "Toyota bZ4X:",
          subtitle: "Reliability Redefined",
          description:
            "Faites l'expérience du zénith de l'ingénierie électrique, où le luxe rencontre une agilité foudroyante.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Autonomie NEDC",
          cdLabel: "Valeur Cd",
          btnConfigure: "CONFIGUREZ VOTRE HAN",
          btnDiscover: "DÉCOUVREZ PLUS",
        },
        philosophy: {
          label: "La Philosophie",
          title: "L'Élégance Rencontre L'Intelligence",
          description:
            "Le BYD Han EV est plus qu'un véhicule ; c'est une déclaration d'intention. Inspiré par la force et la grâce de l'esthétique orientale, le Han combine les éléments de design traditionnels \"Dragon Face\" avec les exigences de pointe de la performance électrique moderne.",
          quote:
            '"Nous n\'avons pas seulement construit une voiture. Nous avons conçu un sanctuaire pour la route, où chaque capteur sert le confort et le contrôle du conducteur."',
        },
        video: {
          title: "Vivez le Mouvement",
        },
        exterior: {
          label: "Maîtrise Visuelle",
          title: "Langage Design Dragon Face",
          description:
            "Un mélange harmonieux de beauté esthétique et d'efficacité aérodynamique, avec un coefficient de traînée de seulement 0,233.",
          feature1Title: "Présence Illuminatrice",
          feature1Desc:
            "Phares LED adaptatifs Matrix inspirés par le regard intense d'un dragon, perçant l'obscurité avec précision.",
          feature2Title: "Sculpture Aérodynamique",
          feature2Desc:
            "Chaque courbe est intentionnelle. Les poignées de porte rétractables assurent une efficacité maximale et un fonctionnement silencieux.",
        },
        battery: {
          label: "La Puissance Centrale",
          title: "Batterie Lame Révolutionnaire",
          description:
            "La sécurité n'est pas une option. La Batterie Lame BYD passe les tests de pénétration de clous les plus rigoureux, assurant une stabilité thermique leader de l'industrie.",
          features: [
            {
              icon: "verified",
              title: "SÉCURITÉ INÉGALÉE",
              desc: "Structure très stable, résistante à l'emballement thermique.",
            },
            {
              icon: "bolt",
              title: "RECHARGE ULTRA-RAPIDE",
              desc: "Chargez de 30% à 80% en seulement 25 minutes.",
            },
            {
              icon: "battery_charging_full",
              title: "DENSITÉ ÉNERGÉTIQUE",
              desc: "150 Wh/kg optimisé pour l'efficacité.",
            },
            {
              icon: "thermostat",
              title: "GESTION THERMIQUE",
              desc: "Système de refroidissement liquide avancé.",
            },
            {
              icon: "update",
              title: "CYCLE DE VIE",
              desc: "Plus de 3000 cycles de charge pour une longévité extrême.",
            },
            {
              icon: "science",
              title: "MATÉRIAUX",
              desc: "Lithium Fer Phosphate pour une stabilité supérieure.",
            },
          ],
        },
        performance: {
          title: "Transmission Intégrale Électrique",
          description:
            "Un système à double moteur délivrant 363 kW. Le système ajuste le couple en millisecondes.",
          bullets: [
            "Équivalent à 494 Chevaux",
            "Couple de pointe 680 Nm",
            "Système de freinage Brembo",
          ],
          stat: "3.9",
          statLabel: "Secondes de 0 à 100km/h",
        },
        gallery: {
          label: "Vitrine Extérieure",
          title: "Perfection Visuelle Sous Tous les Angles",
        },
        interior: {
          title: "Votre Sanctuaire Privé",
          description:
            "Entrez dans le luxe soigné avec du cuir Nappa et des accents d'aluminium.",
          features: [
            {
              title: "Affichage Adaptatif",
              desc: "Un écran ultra-HD rotatif de 15,6 pouces qui s'adapte à votre angle préféré.",
            },
            {
              title: "Luxe Nappa",
              desc: "Des cuirs haut de gamme offrant une expérience tactile à la fois douce et durable.",
            },
            {
              title: "Perfection Sonore",
              desc: "Un système audio Dynaudio avec 12 haut-parleurs.",
            },
          ],
        },
        safety: {
          title: "DiPilot : Le Gardien Intelligent",
          features: [
            {
              icon: "sensors",
              title: "22 Capteurs de Précision",
              desc: "Équipé de 12 radars ultrasoniques et de 5 caméras haute définition.",
            },
            {
              icon: "psychology",
              title: "Niveau d'autonomie 2+",
              desc: "Maintien de voie avancé et freinage d'urgence automatique.",
            },
          ],
        },
        heritage: {
          title: "Un Héritage d'Innovation",
          description: "Skyline Motors est fier de s'associer à BYD.",
        },
        ctaSupport: {
          title: "Scellez l'Excellence",
          description:
            "Finalisez votre acquisition avec nos spécialistes qualifiés.",
          btn: "Discuter avec un Spécialiste",
        },
        ctaEnd: {
          title: "L'AVENIR EST LÀ.",
          description:
            "Votre voyage dans le sommet de la performance commence par un essai.",
          btnPrimary: "RÉSERVER MAINTENANT",
          btnSecondary: "CONFIGUREZ VOTRE HAN",
          footer: "L'exclusivité est la norme. L'innovation est obligatoire.",
        },
      },
      sw: {
        hero: {
          title: "Toyota bZ4X:",
          subtitle: "Reliability Redefined",
          description:
            "Pata uzoefu wa kilele cha uhandisi wa umeme, ambapo anasa inakutana na wepesi.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Masafa ya NEDC",
          cdLabel: "Thamani ya Cd",
          btnConfigure: "SANIDI HAN YAKO",
          btnDiscover: "GUNDUA ZAIDI",
        },
        philosophy: {
          label: "Falsafa",
          title: "Uzuri Unakutana na Ujuzi",
          description:
            "BYD Han EV ni zaidi ya gari; ni taarifa ya dhamira. Imeongozwa na nguvu na neema ya uzuri wa Mashariki.",
          quote:
            '"Hatukujenga gari tu. Tulibuni patakatifu pa barabara, ambapo kila hisia inatumikia faraja ya dereva."',
        },
        video: {
          title: "Pata Uzoefu wa Mwendo",
        },
        exterior: {
          label: "Umahiri wa Kuona",
          title: "Lugha ya Kubuni ya Uso wa Joka",
          description: "Mchanganyiko wa uzuri na ufanisi.",
          feature1Title: "Kuwepo kwa Mwangaza",
          feature1Desc:
            "Taa zinazobadilika za LED matrix zilizoongozwa na macho makali ya joka.",
          feature2Title: "Uchongaji wa Aerodinamika",
          feature2Desc: "Kila mzingo una kusudi, kuhakikisha ufanisi mkubwa.",
        },
        battery: {
          label: "Nguvu ya Msingi",
          title: "Betri ya Blade ya Mapinduzi",
          description:
            "Usalama sio hiari; ni msingi. Betri hupita majaribio magumu zaidi.",
          features: [
            {
              icon: "verified",
              title: "USALAMA USIOLINGANA",
              desc: "Muundo thabiti sugu kwa joto kupita kiasi.",
            },
            {
              icon: "bolt",
              title: "UCHAJI WA HARAKA SANA",
              desc: "Chaji kutoka 30% hadi 80% ndani ya dakika 25.",
            },
            {
              icon: "battery_charging_full",
              title: "UZITO WA NISHATI",
              desc: "150 Wh/kg imeboreshwa kwa ufanisi.",
            },
            {
              icon: "thermostat",
              title: "USIMAMIZI WA JOTO",
              desc: "Mfumo wa hali ya juu wa kupoeza kioevu.",
            },
            {
              icon: "update",
              title: "MZUNGUKO WA MAISHA",
              desc: "Mizunguko zaidi ya 3000 kwa maisha marefu.",
            },
            {
              icon: "science",
              title: "NYENZO",
              desc: "Lithium Iron Phosphate kwa usalama.",
            },
          ],
        },
        performance: {
          title: "Uendeshaji wa Umeme",
          description: "Mfumo wa injini mbili unatoa nguvu ya kW 363.",
          bullets: [
            "Sawa na Nguvu za Farasi 494",
            "Mzunguko wa 680 Nm",
            "Mfumo wa Breki wa Brembo",
          ],
          stat: "3.9",
          statLabel: "Sekunde hadi 100km/h",
        },
        gallery: {
          label: "Maonyesho ya Nje",
          title: "Ukamilifu Kutoka Kila Upande",
        },
        interior: {
          title: "Patakatifu Pako pa Kibinafsi",
          description:
            "Ingia katika ulimwengu wa anasa. Ngozi ya Nappa inayoshonwa kwa mkono.",
          features: [
            {
              title: "Unyumbufu wa Skrini",
              desc: "Skrini inayozunguka inayoendana na wewe.",
            },
            {
              title: "Anasa ya Nappa",
              desc: "Ngozi za hali ya juu.",
            },
            {
              title: "Ukamilifu wa Sauti",
              desc: "Mfumo wa sauti na wasemaji 12.",
            },
          ],
        },
        safety: {
          title: "Mlinzi mwenye Akili",
          features: [
            {
              icon: "sensors",
              title: "Sensorer 22 za Usahihi",
              desc: "Imejaa kamera za hali ya juu.",
            },
            {
              icon: "psychology",
              title: "Kiwango cha Kujitawala",
              desc: "Uwezaji wa njia za kujiendesha.",
            },
          ],
        },
        heritage: {
          title: "Urithi wa Ubunifu",
          description: "Hatua za ubunifu endelevu.",
        },
        ctaSupport: {
          title: "Ungana na Wataalamu",
          description: "Zungumza na wataalamu.",
          btn: "Sema Nasi",
        },
        ctaEnd: {
          title: "Yajayo yapo SASA.",
          description: "Jaribu leo.",
          btnPrimary: "HIFADHI SASA",
          btnSecondary: "Angalia usanidi",
          footer: "Ugunduzi ni muhimu.",
        },
      },
      rn: {
        hero: {
          title: "Toyota bZ4X:",
          subtitle: "Reliability Redefined",
          description: "Gerageza ibyiza by'ikoranabuhanga n'ubwiza.",
          accelLabel: "0-100 km/h",
          rangeLabel: "Urugendo rwa NEDC",
          cdLabel: "Agaciro ka Cd",
          btnConfigure: "HINDURA IMODOKA",
          btnDiscover: "VUMBURA",
        },
        philosophy: {
          label: "Filozofiya yacu",
          title: "Ubwiza n'Ubumenyi",
          description: 'Iyi modoka ifite umwihariko wa "Dragon Face".',
          quote: "Imodoka yacu iha amahoro uyihatwaye.",
        },
        video: {
          title: "Reba Urugendo",
        },
        exterior: {
          label: "Ubwiza",
          title: "Imiterere",
          description: "Inkoramutima z'imvaho za aerodynamics.",
          feature1Title: "Amatara y'Imbere",
          feature1Desc: "Amatara meza cyane ya LED.",
          feature2Title: "Ubwiza bwemeza",
          feature2Desc: "Amabara ahamye n'imiterere inoze.",
        },
        battery: {
          label: "Ingufu nyamukuru",
          title: "Batiri nziza cyane",
          description: "Ikoresha uburyo bugezweho.",
          features: [
            {
              icon: "verified",
              title: "UMUTEKANO",
              desc: "Iterambere riteye imbere.",
            },
            {
              icon: "bolt",
              title: "KWINJIZA UMURIRO",
              desc: "Ikirangirira vuba.",
            },
            {
              icon: "battery_charging_full",
              title: "INGUFU ZIHAGIJE",
              desc: "Ikoresha umuriro muke.",
            },
            {
              icon: "thermostat",
              title: "GUKONJESHA",
              desc: "Uburyo bwo gukonjesha bwihariye.",
            },
            {
              icon: "update",
              title: "KRAMBARA",
              desc: "Ikomeza kubaho umwanya munini.",
            },
            {
              icon: "science",
              title: "IMBONEKARIKANWA",
              desc: "Ubuziranenge buhambaye.",
            },
          ],
        },
        performance: {
          title: "Urugendo rwiza",
          description: "Ingufu zo hejuru.",
          bullets: ["Ingufu zigezweho", "Imikorere myiza", "Feri ya Brembo"],
          stat: "3.9",
          statLabel: "Imasegonda kugeza 100km/h",
        },
        gallery: {
          label: "Ifoto nini",
          title: "Iraboneka Hose",
        },
        interior: {
          title: "Imbere hezam",
          description: "Hateguwe mu buryo bwa Nappa.",
          features: [
            {
              title: "Ibikoresho",
              desc: "Ekarayi igenda ihinduka.",
            },
            {
              title: "Nappa nziza",
              desc: "Irinezwe neza.",
            },
            {
              title: "Amajwi Meza",
              desc: "Indangururamajwi nziza.",
            },
          ],
        },
        safety: {
          title: "Uburinzi",
          features: [
            {
              icon: "sensors",
              title: "Igenzura",
              desc: "Igenzura nziza ihora ijora.",
            },
            {
              icon: "psychology",
              title: "Ubushishozi",
              desc: "Ikora isuzuma hakiri kare.",
            },
          ],
        },
        heritage: {
          title: "Iterambere",
          description: "Ubufatanye bukomeye na BYD.",
        },
        ctaSupport: {
          title: "Tubaze",
          description: "Baza ikiganiro cyihariye.",
          btn: "Ganira natwe",
        },
        ctaEnd: {
          title: "UBU",
          description: "Tujyanye.",
          btnPrimary: "BIKA UBU NYENE",
          btnSecondary: "GENZURA IBYEREKEYE IMODOKA YANJYE",
          footer: "Ikora cyane kandi niyo ishyigikiwe.",
        },
      },
    },
  },
};
