
import React from 'react';
import { Truck, Ship, Plane, Box, Globe, Shield, Zap, MapPin, FileText, Home as HomeIcon, Cog } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'Road & Coil', href: 'road-transport' },
  { label: 'Destinations', href: 'destinations' },
  { label: 'Customs', href: 'customs' },
  { label: 'Other Services', href: 'other-services' },
];

export const LANGUAGES = [
  { code: 'NL', name: 'Nederlands' },
  { code: 'EN', name: 'English' },
  { code: 'IT', name: 'Italiano' },
  { code: 'ES', name: 'Español' },
  { code: 'SE', name: 'Svenska' },
];

export interface CountryData {
  id: string;
  name: string;
  hub: string;
  description: string;
  transitTime: string;
  flag: string;
}

export const COUNTRIES: CountryData[] = [
  { id: 'albania', name: 'Albania', flag: '🇦🇱', hub: 'Port of Durrës', description: 'Strategic gateway to the Balkans. Specialized routes connecting the Adriatic coast to major European corridors.', transitTime: '5-7 Days' },
  { id: 'austria', name: 'Austria', flag: '🇦🇹', hub: 'Vienna Logistics Hub', description: 'Gateway to the Alps and Southeastern Europe. Specializing in mountain-safe transit.', transitTime: '48-72h' },
  { id: 'belgium', name: 'Belgium', flag: '🇧🇪', hub: 'Port of Antwerp-Bruges', description: 'Immediate neighbor service. High-frequency shuttle service between Rotterdam and Antwerp.', transitTime: 'Same Day' },
  { id: 'bosnia', name: 'Bosnia and Herzegovina', flag: '🇧🇦', hub: 'Sarajevo Logistics Hub', description: 'Reliable road freight solutions connecting the heart of the Balkans with the European market.', transitTime: '4-6 Days' },
  { id: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', hub: 'Port of Varna / Sofia Hub', description: 'Reliable freight solutions connecting the Balkans with the rest of Europe.', transitTime: '5-7 Days' },
  { id: 'croatia', name: 'Croatia', flag: '🇭🇷', hub: 'Port of Rijeka / Zagreb Hub', description: 'Connecting the Mediterranean with Central Europe. Specialized in perishables.', transitTime: '3-5 Days' },
  { id: 'cyprus', name: 'Cyprus', flag: '🇨🇾', hub: 'Port of Limassol', description: 'Mediterranean maritime hub. Weekly sailings and comprehensive customs clearance for island-wide delivery.', transitTime: '7-10 Days' },
  { id: 'czechia', name: 'Czech Republic', flag: '🇨🇿', hub: 'Prague Terminal', description: 'The industrial heart of Central Europe. Reliable groupage and FTL services.', transitTime: '48-72h' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰', hub: 'Port of Aarhus', description: 'Bridge between mainland Europe and the Nordics. High reliability schedules.', transitTime: '24-48h' },
  { id: 'estonia', name: 'Estonia', flag: '🇪🇪', hub: 'Port of Tallinn', description: 'Highly digitalized logistics services for the Nordic-Baltic region.', transitTime: '3-5 Days' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮', hub: 'Port of Helsinki / Vantaa Hub', description: 'Specialized logistics routes for the tech and paper industries. Direct ferry and road connections.', transitTime: '3-4 Days' },
  { id: 'france', name: 'France', flag: '🇫🇷', hub: 'Port of Le Havre / Paris-Charles de Gaulle', description: 'Extensive coverage across all departments, specializing in wine logistics and retail goods.', transitTime: '48-72h' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', hub: 'Port of Hamburg / Duisburg Terminal', description: 'Central Europe\'s powerhouse. We offer daily groupage and FTL services to major industrial zones.', transitTime: '24-48h' },
  { id: 'greece', name: 'Greece', flag: '🇬🇷', hub: 'Port of Piraeus', description: 'Intermodal solutions combining sea freight and road transport.', transitTime: '5-7 Days' },
  { id: 'hungary', name: 'Hungary', flag: '🇭🇺', hub: 'Budapest Freeport', description: 'Central European logistics node. Specialized in electronics and retail distribution.', transitTime: '3-4 Days' },
  { id: 'ireland', name: 'Ireland', flag: '🇮🇪', hub: 'Port of Dublin', description: 'Direct ferry connections from the continent to avoid the landbridge.', transitTime: '72h' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', hub: 'Port of Genoa / Milan Logistics Center', description: 'Our "Native Speaker" advantage shines here. Weekly specialized runs for fashion and machinery.', transitTime: '72-96h' },
  { id: 'latvia', name: 'Latvia', flag: '🇱🇻', hub: 'Port of Riga', description: 'Efficient transit routes for Northern and Eastern European trade.', transitTime: '3-5 Days' },
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹', hub: 'Port of Klaipėda / Vilnius', description: 'Logistics hub for the Baltics. Daily connections and secure warehousing.', transitTime: '3-5 Days' },
  { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', hub: 'Bettembourg Dry Port', description: 'Strategically located for cross-border distribution throughout the Greater Region.', transitTime: '24h' },
  { id: 'malta', name: 'Malta', flag: '🇲🇹', hub: 'Marsaxlokk Freeport', description: 'Strategic Mediterranean crossroads. Regular consolidated and full container shipments.', transitTime: '6-9 Days' },
  { id: 'moldova', name: 'Moldova', flag: '🇲🇩', hub: 'Chișinău Hub', description: 'Efficient logistics solutions connecting Eastern Europe with the EU. Specializing in agricultural products and textile transport.', transitTime: '4-6 Days' },
  { id: 'montenegro', name: 'Montenegro', flag: '🇲🇪', hub: 'Port of Bar', description: 'Adriatic gateway logistics. Connecting European markets with the growing Balkan economy.', transitTime: '5-7 Days' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', hub: 'Port of Rotterdam (HQ)', description: 'Our home base. The world\'s most efficient logistics hub at your service.', transitTime: 'Local' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴', hub: 'Port of Oslo', description: 'Customs cleared shipping to the northernmost reaches of Europe.', transitTime: '3-5 Days' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱', hub: 'Port of Gdansk / Warsaw Terminal', description: 'Efficient connections to Eastern Europe\'s growing manufacturing sectors.', transitTime: '48-72h' },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', hub: 'Port of Sines', description: 'Long-haul road and sea freight excellence to the Atlantic coast.', transitTime: '4-6 Days' },
  { id: 'romania', name: 'Romania', flag: '🇷🇴', hub: 'Port of Constanta / Bucharest', description: 'Direct routes to the Black Sea region and fast-growing industrial parks.', transitTime: '4-6 Days' },
  { id: 'sardinia', name: 'Sardinia', flag: '🇮🇹', hub: 'Port of Cagliari', description: 'Expert island logistics. Regular ferry and ro-ro connections from Genoa and Livorno for all types of cargo.', transitTime: '4-6 Days' },
  { id: 'serbia', name: 'Serbia', flag: '🇷🇸', hub: 'Port of Belgrade / Novi Sad', description: 'Danube corridor hub. Extensive road and river transport solutions for the Balkan region.', transitTime: '4-6 Days' },
  { id: 'sicily', name: 'Sicily', flag: '🇮🇹', hub: 'Port of Palermo / Catania', description: 'Comprehensive island coverage. Daily departures with specialized ferry coordination for FTL and LTL shipments.', transitTime: '4-6 Days' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰', hub: 'Bratislava Hub', description: 'Expert automotive logistics and rapid transit to Central European markets.', transitTime: '48-72h' },
  { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮', hub: 'Port of Koper', description: 'Efficient gateway to the Adriatic. High-quality intermodal and road transport.', transitTime: '72-96h' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸', hub: 'Port of Valencia / Madrid Hub', description: 'Leading temperature-controlled transport and general cargo routes to the Iberian peninsula.', transitTime: '3-5 Days' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪', hub: 'Port of Gothenburg', description: 'Regular departures to Scandinavia. Experts in oversized cargo and timber transport.', transitTime: '48-72h' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭', hub: 'Port of Basel', description: 'Precise logistics for a precise nation. Full customs brokerage included.', transitTime: '48-72h' },
  { id: 'turkey', name: 'Turkey', flag: '🇹🇷', hub: 'Ambarli Port / Istanbul Hub', description: 'The gateway to Asia. Extensive experience in trans-Eurasian road and sea logistics.', transitTime: '5-8 Days' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', hub: 'Port of Felixstowe / London Gateway', description: 'Full customs support post-Brexit. Daily sea and road-ferry connections.', transitTime: '24-48h' },
];

export const SERVICES = [
  {
    id: 'road',
    isPrimary: true,
    icon: <Truck className="w-8 h-8" />
  },
  {
    id: 'sea',
    isPrimary: false,
    icon: <Ship className="w-8 h-8" />
  },
  {
    id: 'air',
    isPrimary: false,
    icon: <Plane className="w-8 h-8" />
  },
  {
    id: 'customs',
    isPrimary: false,
    icon: <FileText className="w-8 h-8" />
  },
{
    id: 'individual',
    isPrimary: false,
    icon: <HomeIcon className="w-8 h-8" />
  },
];

export const STATS = [
  { label: 'Years Experience', value: '35+' },
  { label: 'Annual Shipments', value: '120k' },
  { label: 'Native Speakers', value: '12' },
  { label: 'Global Partners', value: '450+' },
];
