/**
 * @file /components/showroom/VehicleShowcase.tsx
 * @description Master showcase landing flow container component.
 * It synthesizes and sequences the following major dynamic content blocks:
 * 1. Brand Innovator Grid: Spotlighting key partners (BYD, MG, Toyota) with inline route anchors.
 * 2. Specialized EV fleet segmatics carousel: Categorized urban, logistic, and rugged models.
 * 3. Great Rift structural recalibrations split screen highlighting reinforced drivetrains and thermal management.
 * 4. Comparative operational tables evaluating traditional expensive fuels vs clean electric autonomy.
 * 5. State-synchronized VIP Showroom Appointment booking scheduler complete with mock server validations.
 * 6. Houses translation dictionaries supporting four regional languages (en, fr, sw, rn).
 */

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Zap,
  Shield,
  TrendingUp,
  Fuel,
  Settings,
  Cloud,
  BatteryCharging,
  CheckCircle,
  Wrench,
  Leaf,
  Star,
} from "lucide-react";
import type { VehicleWithImages } from "@/types/database.types";
import EfficiencyCalculator from "./EfficiencyCalculator";

interface VehicleShowcaseProps {
  vehicle: VehicleWithImages;
  dictionary: Record<string, unknown>;
  lang: string;
  reversed?: boolean;
  backgroundImage?: string;
}

export default function VehicleShowcase({ lang, dictionary }: VehicleShowcaseProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [apptStatus, setApptStatus] = useState<"idle" | "submitting" | "success">("idle");

  const scrollHandler = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Safe dictionary mappings
  const d = (dictionary || {}) as unknown as Record<string, Record<string, string>>;
  const show = d.showroom || {};

  // Localized terms based on selected language
  const translations: Record<string, Record<string, string>> = {
    en: {
      showcaseTitle: "Global Innovation, Regional Authority",
      bydTitle: "Innovation Intelligence",
      mgTitle: "Heritage Performance",
      toyotaTitle: "Sustainable Reliability",
      learnMore: "Learn More",
      fleetPortfolio: "Fleet Portfolio",
      specializedSegments: "Specialized EV Segments",
      commLogistics: "Commercial Logistics",
      commLogisticsDesc: "Heavy-duty transport solutions for urban distribution hubs.",
      cityCommuters: "City Commuters",
      cityCommutersDesc: "Agile, high-efficiency vehicles for the Bujumbura and Kinshasa core.",
      regionalTerrain: "Regional Terrain",
      regionalTerrainDesc: "Specialized high-clearance models for Goma and rough border routes.",
      precisionCore: "Precision Core",
      builtForRift: "Built for the Great Rift.",
      drivetrainsDesc: "Our drivetrains are specifically recalibrated for Central African heat, volcanic dust, and extreme elevation shifts from Bujumbura to Goma.",
      reinforcedChassis: "Reinforced Chassis",
      reinforcedChassisDesc: "Anti-corrosion underbody plating for varied road conditions.",
      thermalManagement: "Thermal Management",
      thermalManagementDesc: "Liquid-cooled systems designed for consistent performance in 35°C+.",
      regionalSupport: "Regional Support",
      regionalSupportDesc: "Authorized maintenance hubs in Kinshasa and Bujumbura.",
      valueRetention: "Value Retention",
      valueRetentionDesc: "Projected 30% higher resale value over traditional ICE vehicles.",
      breakingCycle: "Breaking the Cycle",
      breakingCycleDesc: "Transition from the volatility of imported fuel to the stability of regional electric energy.",
      fuelDependency: "Fuel Dependency",
      unpredictableCosts: "Unpredictable Costs",
      unpredictableCostsDesc: "Subject to global market fluctuations and regional supply chain bottlenecks.",
      highMaintenance: "High Maintenance",
      highMaintenanceDesc: "2,000+ moving parts susceptible to wear, heat, and poor-quality fuel.",
      environmentalToll: "Environmental Toll",
      environmentalTollDesc: "Direct contribution to regional air pollution and climate volatility.",
      electricAutonomy: "Electric Autonomy",
      fixedOperatingCosts: "Fixed Operating Costs",
      fixedOperatingCostsDesc: "Lower cost per km with stable electricity pricing from renewable grids.",
      fewerComponents: "90% Fewer Components",
      fewerComponentsDesc: "Simplified drivetrain reduces downtime and servicing costs significantly.",
      cleanOperations: "Clean Operations",
      cleanOperationsDesc: "Zero tailpipe emissions. Protecting the biodiversity of the Congo Basin.",
      instAuthority: "Institutional Authority",
      testimonial1Text: "The transition to BYD fleet logistics was the single most impactful financial decision for our Kinshasa operations this decade. Fuel savings alone paid for the vehicles in 22 months.",
      testimonial1Author: "Jean-Marc T.",
      testimonial1Role: "Logistics Director, DRC Distribution Hub",
      testimonial2Text: "Reliability in Burundi is not just a luxury, it's a necessity. Skyline's engineering expertise and localized support have kept our fleet at 99% uptime through the most demanding seasons.",
      testimonial2Author: "Pierre B.",
      testimonial2Role: "Managing Partner, Burundi Regional Transit",
      visitHub: "Visit the Skyline Hub",
      futureMobility: "The Future of African Mobility Awaits.",
      joinFlagship: "Join us at our flagship showrooms for a private engineering tour and test drive of the new all-electric portfolio. Experience the silence of innovation.",
      leadersElectrified: "500+ Regional Leaders already electrified.",
      secureAppt: "Secure Your Private Hub Appointment",
      fullName: "Full Name",
      organization: "Organization",
      emailAddress: "Email Address",
      primaryInterest: "Primary Interest",
      interestFleet: "Commercial Fleet Consultation",
      interestCommuter: "Private Luxury Commuter",
      interestPartner: "Engineering & Maintenance Partnership",
      confirmApptBtn: "Confirm Appointment",
      confirmApptSending: "Confirming...",
      confirmApptSuccess: "Appointment Confirmed",
    },
    fr: {
      showcaseTitle: "Innovation Mondiale, Autorité Régionale",
      bydTitle: "Intelligence d'Innovation",
      mgTitle: "Performance d'Héritage",
      toyotaTitle: "Fiabilité Durable",
      learnMore: "En savoir plus",
      fleetPortfolio: "Portefeuille de Flotte",
      specializedSegments: "Segments de VE Spécialisés",
      commLogistics: "Logistique Commerciale",
      commLogisticsDesc: "Solutions de transport lourd pour les hubs de distribution urbains.",
      cityCommuters: "Navetteurs Urbains",
      cityCommutersDesc: "Véhicules agiles et à haute efficacité pour le cœur de Bujumbura et Kinshasa.",
      regionalTerrain: "Terrain Régional",
      regionalTerrainDesc: "Modèles spécialisés à garde au sol élevée pour Goma et les routes frontalières difficiles.",
      precisionCore: "Noyau de Précision",
      builtForRift: "Conçu pour le Grand Rift.",
      drivetrainsDesc: "Nos groupes motopropulseurs sont spécifiquement recalibrés pour la chaleur d'Afrique Centrale, la poussière volcanique et les changements d'altitude extrêmes de Bujumbura à Goma.",
      reinforcedChassis: "Châssis Renforcé",
      reinforcedChassisDesc: "Plaquage de soubassement anti-corrosion pour des conditions de route variées.",
      thermalManagement: "Gestion Thermique",
      thermalManagementDesc: "Systèmes refroidis par liquide conçus pour des performances constantes par 35°C+.",
      regionalSupport: "Support Régional",
      regionalSupportDesc: "Centres de maintenance agréés à Kinshasa et Bujumbura.",
      valueRetention: "Rétention de Valeur",
      valueRetentionDesc: "Valeur de revente projetée 30% plus élevée par rapport aux véhicules thermiques traditionnels.",
      breakingCycle: "Briser le Cycle",
      breakingCycleDesc: "Transition de la volatilité du carburant importé à la stabilité de l'énergie électrique régionale.",
      fuelDependency: "Dépendance au Carburant",
      unpredictableCosts: "Coûts Imprévisibles",
      unpredictableCostsDesc: "Soumis aux fluctuations du marché mondial et aux goulots d'étranglement de la chaîne d'approvisionnement régionale.",
      highMaintenance: "Maintenance Élevée",
      highMaintenanceDesc: "Plus de 2 000 pièces mobiles sensibles à l'usure, à la chaleur et au carburant de mauvaise qualité.",
      environmentalToll: "Bilan Environnemental",
      environmentalTollDesc: "Contribution directe à la pollution de l'air régional et à la volatilité du climat.",
      electricAutonomy: "Autonomie Électrique",
      fixedOperatingCosts: "Coûts d'Exploitation Fixes",
      fixedOperatingCostsDesc: "Coût par km inférieur avec des tarifs d'électricité stables issus de réseaux renouvelables.",
      fewerComponents: "90% de composants en moins",
      fewerComponentsDesc: "La transmission simplifiée réduit considérablement les temps d'arrêt et les coûts d'entretien.",
      cleanOperations: "Opérations Saines",
      cleanOperationsDesc: "Zéro émission d'échappement. Protection de la biodiversité du bassin du Congo.",
      instAuthority: "Autorité Institutionnelle",
      testimonial1Text: "La transition vers la logistique de flotte BYD a été la décision financière la plus percutante de cette décennie pour nos opérations à Kinshasa. Les économies de carburant à elles seules ont amorti les véhicules en 22 mois.",
      testimonial1Author: "Jean-Marc T.",
      testimonial1Role: "Directeur de la Logistique, Hub de Distribution RDC",
      testimonial2Text: "La fiabilité au Burundi n'est pas seulement un luxe, c'est une nécessité. L'expertise en ingénierie de Skyline et l'assistance localisée ont maintenu notre flotte à 99 % opérationnelle pendant les saisons les plus exigeantes.",
      testimonial2Author: "Pierre B.",
      testimonial2Role: "Associé Gérant, Transit Régional du Burundi",
      visitHub: "Visitez le Hub Skyline",
      futureMobility: "L'Avenir de la Mobilité Africaine Vous Attend.",
      joinFlagship: "Rejoignez-nous dans nos showrooms phares pour une visite d'ingénierie privée et un essai routier de notre nouvelle gamme tout électrique.",
      leadersElectrified: "Plus de 500 dirigeants régionaux déjà électrifiés.",
      secureAppt: "Sécurisez Votre Rendez-vous Privé au Hub",
      fullName: "Nom Complet",
      organization: "Organisation",
      emailAddress: "Adresse E-mail",
      primaryInterest: "Sujet Principal",
      interestFleet: "Consultation Flotte Commerciale",
      interestCommuter: "Déplacement Privé de Luxe",
      interestPartner: "Partenariat d'Ingénierie & Maintenance",
      confirmApptBtn: "Confirmer le Rendez-vous",
      confirmApptSending: "Confirmation...",
      confirmApptSuccess: "Rendez-vous Confirmé",
    },
    sw: {
      showcaseTitle: "Uvumbuzi wa Kimataifa, Mamlaka ya Kikanda",
      bydTitle: "Akili ya Uvumbuzi",
      mgTitle: "Utendaji wa Urithi",
      toyotaTitle: "Uaminifu Endelevu",
      learnMore: "Jifunze Zaidi",
      fleetPortfolio: "Kwingo la Magari",
      specializedSegments: "Sehemu Maalum za Umeme",
      commLogistics: "Usafirishaji wa Kibiashara",
      commLogisticsDesc: "Suluhisho za usafirishaji mkubwa kwa vituo vya usambazaji mijini.",
      cityCommuters: "Wasafiri wa Mjini",
      cityCommutersDesc: "Magari mepesi na yenye ufanisi mkubwa kwa moyo wa Bujumbura na Kinshasa.",
      regionalTerrain: "Eneo la Kikanda",
      regionalTerrainDesc: "Mifano maalum ya kiwango kikubwa cha ardhi kwa Goma na njia mbaya za mpakani.",
      precisionCore: "Kiini cha Usahihi",
      builtForRift: "Imeundwa kwa Ajili ya Bonde Kuu.",
      drivetrainsDesc: "Mifano yetu ya kujiendesha imeboreshwa haswa kwa ajili ya joto la Afrika ya Kati, vumbi la volkeno, na mabadiliko makubwa ya miinuko kutoka Bujumbura hadi Goma.",
      reinforcedChassis: "Chasi Iliyoimarishwa",
      reinforcedChassisDesc: "Upakaji wa kuzuia kutu chini ya gari kwa hali tofauti za barabara.",
      thermalManagement: "Udhibiti wa Joto",
      thermalManagementDesc: "Mifano iliyopozwa kwa kioevu iliyoundwa kwa utendaji thabiti katika nyuzi joto 35°C+.",
      regionalSupport: "Usaidizi wa Kikanda",
      regionalSupportDesc: "Vituo vilivyoidhinishwa vya matengenezo huko Kinshasa na Bujumbura.",
      valueRetention: "Uhifadhi wa Thamani",
      valueRetentionDesc: "Thamani ya kuuza tena inayotarajiwa kuwa juu kwa 30% ikilinganishwa na magari ya kawaida ya mafuta.",
      breakingCycle: "Kuvunja Mzunguko",
      breakingCycleDesc: "Mpito kutoka kwa mabadiliko ya mafuta yaliyoagizwa hadi utulivu wa nishati ya umeme ya kikanda.",
      fuelDependency: "Utegemezi wa Mafuta",
      unpredictableCosts: "Gharama Isiyotabirika",
      unpredictableCostsDesc: "Inakabiliwa na kushuka kwa thamani kwa soko la kimataifa na vikwazo vya ugavi vya kikanda.",
      highMaintenance: "Matengenezo ya Juu",
      highMaintenanceDesc: "Sehemu zinazohamia 2,000+ zinazoweza kuchakaa, joto, na nishati duni.",
      environmentalToll: "Athari kwa Mazingira",
      environmentalTollDesc: "Uchafuzi wa moja kwa moja wa hewa ya kikanda na mabadiliko ya tabianchi.",
      electricAutonomy: "Uhuru wa Umeme",
      fixedOperatingCosts: "Gharama Zisizobadilika za Uendeshaji",
      fixedOperatingCostsDesc: "Gharama ya chini kwa kila kilomita kukiwa na bei thabiti za umeme kutoka kwa gridi mbadala.",
      fewerComponents: "Vipengele vichache kwa 90%",
      fewerComponentsDesc: "Mfumo rahisi wa kujiendesha unapunguza wakati wa kutofanya kazi na gharama za matengenezo kwa kiwango kikubwa.",
      cleanOperations: "Uendeshaji Safi",
      cleanOperationsDesc: "Utoaji wa sifuri wa moshi wa gari. Kulinda bioanuwai ya Bonde la Kongo.",
      instAuthority: "Mamlaka ya Kiasasishi",
      testimonial1Text: "Mabadiliko ya kuelekea usafirishaji wa BYD yalikuwa uamuzi muhimu zaidi wa kifedha kwa shughuli zetu za Kinshasa muongo huu. Akiba ya mafuta pekee ililipia magari katika miezi 22.",
      testimonial1Author: "Jean-Marc T.",
      testimonial1Role: "Mkurugenzi wa Usafirishaji, Kituo cha DRC",
      testimonial2Text: "Uaminifu nchini Burundi sio tu anasa, ni lazima. Utaalam wa kiufundi wa Skyline na usaidizi uliopo nchini umeimarisha kundi letu la magari kwa asilimia 99 katika msimu mgumu.",
      testimonial2Author: "Pierre B.",
      testimonial2Role: "Mshirika Usimamizi, Burundi Regional Transit",
      visitHub: "Tembelea Kituo cha Skyline",
      futureMobility: "Mustakabali wa Usafiri wa Afrika Unasubiri.",
      joinFlagship: "Jiunge nasi katika vyumba vyetu vikuu vya maonyesho kwa ziara ya kibinafsi ya kihandisi na mtihani wa kuendesha gari mpya kabisa za portfolio ya umeme.",
      leadersElectrified: "Viongozi 500+ wa Kikanda wamepata nishati ya umeme.",
      secureAppt: "Hifadhi Miadi yako ya Kibinafsi ya Kituo",
      fullName: "Jina Kamili",
      organization: "Shirika",
      emailAddress: "Anwani ya Barua Pepe",
      primaryInterest: "Nia Kuu",
      interestFleet: "Ushauri wa Kundi la Biashara",
      interestCommuter: "Usafiri wa Kibinafsi wa Kifahari",
      interestPartner: "Ushirikiano wa Uhandisi na Matengenezo",
      confirmApptBtn: "Thibitisha Miadi",
      confirmApptSending: "Inathibitisha...",
      confirmApptSuccess: "Miadi Imethibitishwa",
    },
    rn: {
      showcaseTitle: "Ubuhinga bw'Isi Yose, Ububasha bw'Akarere",
      bydTitle: "Ubwenge bw'Ubuhinga",
      mgTitle: "Ukora bw'Akaranga",
      toyotaTitle: "Kwizigirwa Kurama",
      learnMore: "Tohoza Amakuru",
      fleetPortfolio: "Ububiko bw'Ikigo",
      specializedSegments: "Ibyiciro Byihariye by'Umeme",
      commLogistics: "Uby'Ingendo z'Ikibiashara",
      commLogisticsDesc: "Inyishu z'ingendo ziremereye ku birindiro vy'isandaza ry'ibintu mu bisagara.",
      cityCommuters: "Abagenda mu Gisagara",
      cityCommutersDesc: "Imiduga yihuta kandi ikora neza ku mitima ya Bujumbura n'i Kinshasa.",
      regionalTerrain: "Ubutaka bw'Akarere",
      regionalTerrainDesc: "Imiduga ishikaye y'ubutaka bwa Goma n'imihanda igoranye y'imbibe.",
      precisionCore: "Uruhimbi rw'Ubuhanga",
      builtForRift: "Yubakiwe Igisate Kinini.",
      drivetrainsDesc: "Imiduga yacu yateguriwe neza ubushuye bwo muri Afrika yo Hagati, umukungugu w'ibirunga, n'imisozi y'ukuranduruka kuva i Bujumbura gushika i Goma.",
      reinforcedChassis: "Ikabiliye Igisanduku/Uruhimbi",
      reinforcedChassisDesc: "Gukingira gushonagira munsi y'umuduga ku nkingo zitandukanye z'imihanda.",
      thermalManagement: "Uburere bw'Ubushuye",
      thermalManagementDesc: "Uburyo bwo gukoresha amazi yo gukonjesha bugakorana neza mu gushusha kurenga 35°C+.",
      regionalSupport: "Gushigikirana mu Karere",
      regionalSupportDesc: "Ibirindiro vyemewe vyo gusana imiduga i Kinshasa n'i Bujumbura.",
      valueRetention: "Kuzigama Agaciro",
      valueRetentionDesc: "Agaciro k'okugurisha gushasha kitezwe kurenga ku bice 30% ku miduga ya kera y'igitoro.",
      breakingCycle: "Guhendura Uruziga",
      breakingCycleDesc: "Gukuraho ihindagurika ry'ibitoro bizo m'amahanga ugana ku kwizigira kw'umeme w'akarere.",
      fuelDependency: "Gukenera Igitoro gusa",
      unpredictableCosts: "Uburyo bw'Amahera butazwi neza",
      unpredictableCostsDesc: "Ingaruka y'isoko ry'isi n'inyanduruko z'inzira z'isandazwa mu karere.",
      highMaintenance: "Gusura imiduga kenshi",
      highMaintenanceDesc: "Ibyuma bihindagurika birenga 2000 bishobora gushonagira, kwaka canke kwononwa n'igitoro kibi.",
      environmentalToll: "Ingaruka ku Macungiro",
      environmentalTollDesc: "Impamvu y'umwuka mubi mu karere n'ihindagurika ry'ibihe.",
      electricAutonomy: "Kwitegura mu vy'Umeme",
      fixedOperatingCosts: "Amahera agumaho y'ugukora",
      fixedOperatingCostsDesc: "Amahera makeye ku kilometero kimwe hamwe n'agaciro k'umeme kaziye neza kavuye mu masoko mashasha.",
      fewerComponents: "Imisoso makeye ku bice 90%",
      fewerComponentsDesc: "Imodoka yoroheje igabanya cyane igihe cyo kudakora hamwe n'amafaranga yo kuyitaho.",
      cleanOperations: "Ugukora kwiza kutonona",
      cleanOperationsDesc: "Nta mwotsi na muke usohoka. Gukingira ibinyabuzima n'isandugu y'ikibaya ca Kongo.",
      instAuthority: "Ubwami bw'Ikigo",
      testimonial1Text: "Guhindukira ku ngendo canke imiduga ya BYD naryo ryabaye ingingo ihambaye y'uburyo mu gukora kwacu i Kinshasa muri iki kiringo. Kuzigama igitoro konyene kwasubije inyuma amahera twaguze imiduga mu mezi 22.",
      testimonial1Author: "Jean-Marc T.",
      testimonial1Role: "Umuyobozi w'Ingendo, Ikinshasa DRC",
      testimonial2Text: "Ukwizigirwa mu Burundi si agasusuruko gusa, ni ikintu kinyene gikenewe. Ubuhanga m'ubwubatsi bwa Skyline n'igishigikiro mu gihugu vyatumye imiduga yacu ikora neza ku bice 99% mu bihe bigoranye cane.",
      testimonial2Author: "Pierre B.",
      testimonial2Role: "Abasangirangendo mu Burundi Regional Transit",
      visitHub: "Gendera ikicaro ca Skyline",
      futureMobility: "Kazoza k'ingendo muri Afrika kakarindiriye.",
      joinFlagship: "Nimuze mu vyumba vyacu bishasha vy'imyerekano muratuzwe neza mu bwubatsi m'ugusuzuma imiduga yose mishasha y'umeme.",
      leadersElectrified: "Abarongozi b'akarere barenga 500 bamaze bamurikwa.",
      secureAppt: "Saba ibonana canke umubonano wawe wihariye",
      fullName: "Izina Ryose",
      organization: "Ishengero / Ikigo",
      emailAddress: "Imeri",
      primaryInterest: "Ico wipfuza",
      interestFleet: "Guhuza ibiganiro vy'ic'ikigo",
      interestCommuter: "Umuduga w'inyabupfura wihariye",
      interestPartner: "Amasezerano m'ugusana n'ubwubatsi",
      confirmApptBtn: "Emeza Umubonano",
      confirmApptSending: "Turiko turemeza...",
      confirmApptSuccess: "Umubonano Wemejwe",
    },
  };

  const activeTrans = translations[lang] || translations["en"];

  const handleApptSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApptStatus("submitting");
    setTimeout(() => {
      setApptStatus("success");
      const form = e.target as HTMLFormElement;
      setTimeout(() => {
        setApptStatus("idle");
        form.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-0 overflow-x-hidden font-body-md text-on-background selection:bg-primary selection:text-on-primary-fixed">
      {/* Section 1: Importer Portfolio */}
      <section className="px-margin-desktop pt-12 pb-24 max-w-[1500px] mx-auto animate-fade-in">
        <h2 className="font-headline-lg text-headline-md sm:text-headline-lg mb-16 text-center text-primary-fixed">
          {activeTrans.showcaseTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* BYD */}
          <div className="group relative overflow-hidden bg-surface-container-low h-[280px] sm:h-[350px] md:h-[450px] flex flex-col justify-end p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmpkTq-zFHrbd5OG-elnfWB7JpUkyaqqzDqI9qS62IIPdgUvjlmuxUOmuAkyWYD6hMfztN0o5Hl9vNF2X4xW-PBHocKrlo6NO-hmgHOWrCJG-GyBxyf9JHcV5U04gV76j5czY_AZ1nAi4oDztOJl_HjJWb8aB3dUP2BpnHW0pM15vQUUSeRhf1hBxT9KjwfK7sh5N_1esBgKWskzvPD06xuPDE4G6m46LxmTppOfyirGx4-ojSf68YhNcjcJjJQ_VmWthRgTLa4jc"
                alt="BYD Showroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <Image
                src="/assets/BYD_LOGO.png"
                alt="BYD Logo"
                width={150}
                height={150}
                relative-pos="true"
                quality={100}
                draggable={false}
                className="mb-[-30px] ml-[-30px] object-contain p-1 select-none pointer-events-none scale-[2] sm:scale-100 md:scale-110 lg:scale-130 origin-bottom-left"
              />
              <h3 className="font-special text-xl md:text-[22px] lg:text-headline-md mb-4">
                {activeTrans.bydTitle}
              </h3>

              <Link
                className="inline-flex items-center whitespace-nowrap flex-nowrap text-primary font-label-lg border-b border-primary pb-1 group/link cursor-pointer"
                href={`/${lang}/showroom?brand=BYD`}
              >
                {activeTrans.learnMore}{" "}
                <span className="inline-flex items-center ml-2 group-hover/link:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
          {/* MG */}
          <div className="group relative overflow-hidden bg-surface-container-low h-[280px] sm:h-[350px] md:h-[450px] flex flex-col justify-end p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK5lOw8ivDER7ls_ptHk2BvF1Wh4132X0WXNCsL0NNxkL_cOynub57FZwI1DdxKD_FNwr_u2hf-EsSOZeUE3kyMl9FcS53gp5bTr5HsCp504MyZnvp4srLa5-xPpwPHQY76Cs_9gzhiSo9wbMBPXrmVsyhGiSM2l2spO8bSNSSazd4rXpI7Flb6SZ2E4mRwsaIwJrLxBTuI9e1yYcmMARiVWy2rPTGgEEOWbJ1nq0N--6xOjacSYfhV-qRuJUSnSP6Nl33YVqn6cw"
                alt="MG Showroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <Image
                src="/assets/MG_LOGO.png"
                alt="MG Logo"
                width={150}
                height={150}
                quality={100}
                draggable={false}
                className="mb-[-30px] ml-[-40px] object-contain p-1 select-none pointer-events-none scale-[1.65] sm:scale-100 md:scale-110 lg:scale-130 origin-bottom-left"
              />
              <h3 className="font-special text-xl md:text-[22px] lg:text-headline-md mb-4">
                {activeTrans.mgTitle}
              </h3>

              <Link
                className="inline-flex items-center whitespace-nowrap flex-nowrap text-primary font-label-lg border-b border-primary pb-1 group/link cursor-pointer"
                href={`/${lang}/showroom?brand=MG`}
              >
                {activeTrans.learnMore}{" "}
                <span className="inline-flex items-center ml-2 group-hover/link:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
          {/* Toyota */}
          <div className="group relative overflow-hidden bg-surface-container-low h-[280px] sm:h-[350px] md:h-[450px] flex flex-col justify-end p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWcTxnaBS45UxcjlaORrSMuV299HT7ZH2o4rkUbipJ6o6dEWBPuTKpJM-oL6C_ghHsqiuwiFwEUYXM_svDQ4qwPPMauGTz2v5-3xa9jpEvbNWik_VHFzO6Sdt5g67N_bfXP2v6iaGnEkHeZI4LtC4ADPg5zYYxtK7jyVZY633J6cRVDa3stGjApGmWyMixLXzJFMaa7OEL-mUBMsdf24shN6709kFaygURxve-2Xv942ttIryiBHRMR20VoOTvxFr3Ff1eFTIsR8"
                alt="Toyota Showroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <Image
                src="/assets/TOYOTA_LOGO.png"
                alt="Toyota Logo"
                width={150}
                height={150}
                quality={100}
                draggable={false}
                className="mb-[-30px] ml-[-50px] object-contain p-1 select-none pointer-events-none scale-[1.65] sm:scale-100 md:scale-110 lg:scale-130 origin-bottom-left"
              />
              <h3 className="font-special text-xl md:text-[22px] lg:text-headline-md mb-4">
                {activeTrans.toyotaTitle}
              </h3>

              <Link
                className="inline-flex items-center whitespace-nowrap flex-nowrap text-primary font-label-lg border-b border-primary pb-1 group/link cursor-pointer"
                href={`/${lang}/showroom?brand=Toyota`}
              >
                {activeTrans.learnMore}{" "}
                <span className="inline-flex items-center ml-2 group-hover/link:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skyline Fleet Carousel */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto mb-12 flex justify-between items-end">
          <div>
            <span className="text-[16px] sm:text-headline-md text-primary font-special tracking-widest uppercase mb-4 block animate-pulse whitespace-nowrap">
              {activeTrans.fleetPortfolio}
            </span>
            <h2 className="font-headline-lg text-[20px] sm:text-headline-md whitespace-nowrap">
              {activeTrans.specializedSegments}
            </h2>
          </div>
          <div className="flex gap-4 xl:hidden">
            <button
              onClick={() => scrollHandler("left")}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 hover:border-primary transition-colors text-secondary hover:text-primary cursor-pointer active:scale-95 duration-100"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 shrink-0" />
            </button>
            <button
              onClick={() => scrollHandler("right")}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 hover:border-primary transition-colors text-secondary hover:text-primary cursor-pointer active:scale-95 duration-100"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 shrink-0" />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex xl:grid xl:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto xl:overflow-x-visible hide-scrollbar pb-12 scroll-smooth snap-x snap-mandatory max-w-container-max mx-auto"
        >
          {/* Segment Card 1 */}
          <div className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] md:w-[calc(50vw-76px)] md:min-w-[calc(50vw-76px)] xl:w-full xl:min-w-0 bg-surface-container-low p-6 border border-outline-variant/20 hover:border-primary/50 transition-all group flex-shrink-0 xl:flex-shrink snap-center md:snap-start">
            <div className="relative h-[180px] mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrr7UsUv2z24_JLfLn_vDvwagH1MhERse1ZIxoZMIhaRiWcQ3FPlnju2sHng9rlZSERCUHCLhU0iz84kcmwXQLGZyrNluxAdO3WdbMH-oEgYca8-pFghSEF2YRZPLSwqUcuqjNHquHlYhvlMl_h4n53PZrHY0bh9OhcEj-AEjXO3sETQTuklo3uUBy85U5O5DreiV2_pKK2Cm312uuJaY3P7sjVFLbWEVl38-1nTujV4zszwvvCnR8vVDbhTyh1QN0XNa0Vbx9xqw"
                alt="Commercial"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm tracking-tighter">
                [100% ELECTRIC]
              </div>
            </div>
            <h4 className="font-display-lg text-headline-md mb-2">
              {activeTrans.commLogistics}
            </h4>
            <p className="font-body-md text-secondary mb-4">
              {activeTrans.commLogisticsDesc}
            </p>
            <div className="flex justify-between items-center text-primary-fixed-dim">
              <span className="font-label-lg">{show.range || "Range"}: 320km</span>
              <span className="inline-flex items-center text-primary transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 shrink-0" />
              </span>
            </div>
          </div>
          {/* Segment Card 2 */}
          <div className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] md:w-[calc(50vw-76px)] md:min-w-[calc(50vw-76px)] xl:w-full xl:min-w-0 bg-surface-container-low p-6 border border-outline-variant/20 hover:border-primary/50 transition-all group flex-shrink-0 xl:flex-shrink snap-center md:snap-start">
            <div className="relative h-[180px] mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdYJYaW1-y-jZs0WoLYqF68v3UPBPU92mtJUDOqEbrsalCPVTE5zZPkAPFu57rBdtOHTw4WhEitRgPWx3Ev1qjcjPjnRdTveIyKj8EvaaFHgR-y9O5oWtWr8Wp6Hg_poPSgsh6ZySlMA3nKloNDdXTB1boEzww0n5eXR1EDDv4aSKMBODcbOoS2yQ3rj2ga9N4ZxlBpPeLy-Gvf7G3OsuMdRqvIKPdxsb42X_Tq8fEwY3uTOtpkW5AQBK26q3mMIQa020dOgxtgls"
                alt="City Commuter"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm tracking-tighter">
                [100% ELECTRIC]
              </div>
            </div>
            <h4 className="font-display-lg text-headline-md mb-2">
              {activeTrans.cityCommuters}
            </h4>
            <p className="font-body-md text-secondary mb-4">
              {activeTrans.cityCommutersDesc}
            </p>
            <div className="flex justify-between items-center text-primary-fixed-dim">
              <span className="font-label-lg">{show.range || "Range"}: 450km</span>
              <span className="inline-flex items-center text-primary transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 shrink-0" />
              </span>
            </div>
          </div>
          {/* Segment Card 3 */}
          <div className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] md:w-[calc(50vw-76px)] md:min-w-[calc(50vw-76px)] xl:w-full xl:min-w-0 bg-surface-container-low p-6 border border-outline-variant/20 hover:border-primary/50 transition-all group flex-shrink-0 xl:flex-shrink snap-center md:snap-start">
            <div className="relative h-[180px] mb-6 overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-8AbsOQ0TvTlsY8b0FWM14EvE_7MyRB6gawLxA9PppXSsfjcjNWnBmPF2xhZ_LHilYzkRAc45ZY031b3Oc2eLIe2MafkVv57z8zi_M0_sq4gf8pj09uGY69BsnO2zE8L6xdD--Pd-EIMWuW6Pg7iADMlWofVuIycIIWBkaqv6RMBeX_eND215iUZZAMNrXzCNMcuNzH0dBZQjUjeuxoE2MsiArT-pZMVbXj-ozndAfqEPhb0oXOS0SPG58dZaMqNGDTW0y81n0I"
                alt="Regional"
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm tracking-tighter">
                [100% ELECTRIC]
              </div>
            </div>
            <h4 className="font-display-lg text-headline-md mb-2">
              {activeTrans.regionalTerrain}
            </h4>
            <p className="font-body-md text-secondary mb-4">
              {activeTrans.regionalTerrainDesc}
            </p>
            <div className="flex justify-between items-center text-primary-fixed-dim">
              <span className="font-label-lg">{show.range || "Range"}: 520km</span>
              <span className="inline-flex items-center text-primary transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 shrink-0" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Engineering Excellence Split Screen */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[90vh] border-y border-outline-variant/20">
        <div className="w-full lg:w-1/2 relative bg-surface-container-highest overflow-hidden p-8 sm:p-12 md:p-16 lg:p-margin-desktop flex flex-col justify-center min-h-[400px] lg:min-h-0">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATx6XrwI-AkOp8oGF6n-4kuE2nD2ppjRm4tXADEcnLYdnmi8XShJBcyV1x7s59zBxquu5qlYvNlsd6rPBoK8REb0eU1h1zt_i1j2q74Azwrf8_HaQPPYsJm5WhGTLcVpaTdlxPHJuccmf4N_KJoNnKWbm6gtHI9aYqBHg8rBF9ZJjEEYE6ffjWNfd0UfxmTxielxiRVQ5P9O5xrJRkkqmtQF3YHsJAIlPnxnRpWCODF-mcsh0uqByxupnO0f1RUJgoeh9CWMNpPZ8"
            alt="Great Rift engineering"
          />
          <div className="relative z-10">
            <span className="text-primary font-label-lg tracking-[0.3em] uppercase mb-6 block">
              {activeTrans.precisionCore}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] mb-8 text-on-surface leading-[1.1]">
              {activeTrans.builtForRift.split(".").slice(0, 1).join("")}.
            </h2>
            <p className="font-body-lg text-secondary max-w-md">
              {activeTrans.drivetrainsDesc}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-background p-8 sm:p-12 md:p-16 lg:p-margin-desktop flex flex-col justify-center gap-8 lg:gap-12 py-16 lg:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start bg-surface-container/60 p-6 rounded-lg border border-outline-variant/35 hover:border-primary/45 transition-all duration-300">
              <Cpu className="text-primary w-[35px] h-[35px] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display-lg text-xl md:text-2xl mb-2 font-bold">
                  {activeTrans.reinforcedChassis}
                </h4>
                <p className="font-body-md text-secondary">
                  {activeTrans.reinforcedChassisDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start bg-surface-container/60 p-6 rounded-lg border border-outline-variant/35 hover:border-primary/45 transition-all duration-300">
              <Zap className="text-primary w-[35px] h-[35px] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display-lg text-xl md:text-2xl mb-2 font-bold">
                  {activeTrans.thermalManagement}
                </h4>
                <p className="font-body-md text-secondary">
                  {activeTrans.thermalManagementDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start bg-surface-container/60 p-6 rounded-lg border border-outline-variant/35 hover:border-primary/45 transition-all duration-300">
              <Shield className="text-primary w-[35px] h-[35px] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display-lg text-xl md:text-2xl mb-2 font-bold">
                  {activeTrans.regionalSupport}
                </h4>
                <p className="font-body-md text-secondary">
                  {activeTrans.regionalSupportDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start bg-surface-container/60 p-6 rounded-lg border border-outline-variant/35 hover:border-primary/45 transition-all duration-300">
              <TrendingUp className="text-primary w-[35px] h-[35px] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display-lg text-xl md:text-2xl mb-2 font-bold">
                  {activeTrans.valueRetention}
                </h4>
                <p className="font-body-md text-secondary">
                  {activeTrans.valueRetentionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Petroleum Alternative Comparison */}
      <section className="px-margin-desktop py-24 max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-16 max-w-[1500px] mx-auto">
          <h2 className="font-headline-lg text-[26px] md:text-3xl lg:text-[36px] leading-[1.25] text-left max-w-[260px] md:max-w-[220px] lg:max-w-[300px] shrink-0">
            {activeTrans.breakingCycle}
          </h2>
          <p className="font-body-lg text-secondary text-left max-w-2xl md:mt-1">
            {activeTrans.breakingCycleDesc}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* The Past */}
          <div className="flex-1 bg-surface-container-low p-8 sm:p-10 border border-on-tertiary-fixed-variant/20 hover:border-on-tertiary-fixed-variant/40 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center">
                <Fuel className="text-on-error-container w-6 h-6" />
              </div>
              <h3 className="font-display-lg text-[16px] sm:text-headline-md uppercase tracking-tight">
                {activeTrans.fuelDependency}
              </h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <TrendingUp className="text-error w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">{activeTrans.unpredictableCosts}</p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.unpredictableCostsDesc}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Settings className="text-error w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">{activeTrans.highMaintenance}</p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.highMaintenanceDesc}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Cloud className="text-error w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">{activeTrans.environmentalToll}</p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.environmentalTollDesc}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* The Future */}
          <div className="flex-1 bg-surface-container-high p-8 sm:p-10 border border-primary/20 hover:border-primary/60 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Zap className="text-primary w-16 h-16 opacity-10" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                <BatteryCharging className="text-on-primary-container w-6 h-6" />
              </div>
              <h3 className="font-display-lg text-[16px] sm:text-headline-md uppercase tracking-tight text-primary">
                {activeTrans.electricAutonomy}
              </h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">
                    {activeTrans.fixedOperatingCosts}
                  </p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.fixedOperatingCostsDesc}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Wrench className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">{activeTrans.fewerComponents}</p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.fewerComponentsDesc}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Leaf className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-[13px] sm:text-body-lg font-bold whitespace-nowrap sm:whitespace-normal">{activeTrans.cleanOperations}</p>
                  <p className="text-secondary text-[11px] sm:text-body-md">
                    {activeTrans.cleanOperationsDesc}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Efficiency Calculator */}
      <EfficiencyCalculator dictionary={dictionary} />

      {/* Section 6: Proof of Impact */}
      <section className="px-margin-desktop py-24 max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-[22px] sm:text-headline-lg mb-16 text-center">
          {activeTrans.instAuthority}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Testimonial 1 */}
          <div className="p-6 sm:p-10 border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-low transition-colors group">
            <div>
              <div className="flex text-primary gap-1 mb-4 sm:mb-6">
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
              </div>
              <p className="font-quote text-[14px] sm:text-body-lg leading-relaxed mb-6 sm:mb-8">
                &quot;{activeTrans.testimonial1Text}&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
                alt="Jean-Marc T."
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-[13px] sm:text-body-lg font-bold">{activeTrans.testimonial1Author}</p>
                <p className="text-[10px] sm:text-label-sm text-secondary uppercase tracking-widest">
                  {activeTrans.testimonial1Role}
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 sm:p-10 border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-low transition-colors group">
            <div>
              <div className="flex text-primary gap-1 mb-4 sm:mb-6">
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
                <Star className="w-5 h-5 fill-current text-primary" />
              </div>
              <p className="font-quote text-[14px] sm:text-body-lg leading-relaxed mb-6 sm:mb-8">
                &quot;{activeTrans.testimonial2Text}&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Pierre B."
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-[13px] sm:text-body-lg font-bold">{activeTrans.testimonial2Author}</p>
                <p className="text-[10px] sm:text-label-sm text-secondary uppercase tracking-widest">
                  {activeTrans.testimonial2Role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Skyline Hub CTA */}
      <section className="relative min-h-screen lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden py-16 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvQVShuo8td1CXOBB6HOJTo8wYKJ3EBARBAGQiNd1b-Ts4TPwl82X3L-2MA3r9QH1nnGkDxVYmCwkUQJAIHibCVd8HXhWvtJdyB5qmez33uqGQWcL_ybuW4wfmI7PyfPyX84ARp-LCrYhr2nUCRC2y_XjZngOi1V7p-5lLn7oQLgMG-G0XqG3TIDc72aV6WyLxSW9ukzk02m5sYz-xmVErydkt45vqRtrtUdcHZgmDYdr3E3GQChirk4Mk"
            alt="Skyline Hub"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-primary text-xs sm:text-label-lg tracking-[0.5em] uppercase mb-4 block animate-pulse">
              {activeTrans.visitHub}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-[64px] mb-6 sm:mb-8 leading-[1.1]">
              {activeTrans.futureMobility}
            </h2>
            <p className="font-body-sm sm:font-body-lg text-secondary text-sm sm:text-base mb-6 sm:mb-12 max-w-lg">
              {activeTrans.joinFlagship}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Leader 1"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-background object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="Leader 2"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-background object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=150&q=80"
                  alt="Leader 3"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-background object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs sm:text-label-lg text-on-surface">
                {activeTrans.leadersElectrified}
              </p>
            </div>
          </div>
          <div
            className="glass-dark p-6 sm:p-10 border border-primary/40 shadow-2xl"
            style={{
              background: "rgba(18, 20, 20, 0.8)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3 className="font-display text-[20px] sm:text-headline-md mb-6 sm:mb-8">
              {activeTrans.secureAppt}
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleApptSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-[11px] sm:text-label-sm text-secondary uppercase mb-2 block">
                    {activeTrans.fullName}
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/40 text-on-surface py-2.5 px-3 sm:py-3 sm:px-4 text-xs sm:text-base focus:border-primary focus:ring-0 rounded"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] sm:text-label-sm text-secondary uppercase mb-2 block">
                    {activeTrans.organization}
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/40 text-on-surface py-2.5 px-3 sm:py-3 sm:px-4 text-xs sm:text-base focus:border-primary focus:ring-0 rounded"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] sm:text-label-sm text-secondary uppercase mb-2 block">
                  {activeTrans.emailAddress}
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/40 text-on-surface py-2.5 px-3 sm:py-3 sm:px-4 text-xs sm:text-base focus:border-primary focus:ring-0 rounded"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className="text-[11px] sm:text-label-sm text-secondary uppercase mb-2 block">
                  {activeTrans.primaryInterest}
                </label>
                <select className="w-full bg-surface border border-outline-variant/40 text-on-surface py-2.5 px-3 sm:py-3 sm:px-4 text-xs sm:text-base focus:border-primary focus:ring-0 rounded cursor-pointer">
                  <option>{activeTrans.interestFleet}</option>
                  <option>{activeTrans.interestCommuter}</option>
                  <option>{activeTrans.interestPartner}</option>
                </select>
              </div>
              <button
                className="w-full text-on-primary text-[12px] sm:text-label-lg uppercase tracking-widest py-3 sm:py-4 hover:brightness-110 transition-all scale-100 hover:scale-[1.02] active:scale-95 shadow-lg rounded font-semibold disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #f2ca50 0%, #d4af37 100%)",
                }}
                type="submit"
                disabled={apptStatus !== "idle"}
              >
                {apptStatus === "idle" && activeTrans.confirmApptBtn}
                {apptStatus === "submitting" && activeTrans.confirmApptSending}
                {apptStatus === "success" && activeTrans.confirmApptSuccess}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
