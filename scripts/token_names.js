const adjectives = [
  // Tech-related
  "Super",
  "Mega",
  "Ultra",
  "Hyper",
  "Quantum",
  "Cyber",
  "Digital",
  "Smart",
  "Global",
  "Future",
  "Crypto",
  "Meta",
  "Tech",
  "Nexus",
  "Nova",
  "Alpha",
  "Beta",
  "Delta",
  "Prime",
  "Elite",
  // Financial
  "Secure",
  "Safe",
  "Stable",
  "Dynamic",
  "Rapid",
  "Swift",
  "Fast",
  "Quick",
  "Instant",
  "Flash",
  // Modern
  "Neo",
  "Modern",
  "Advanced",
  "Next",
  "Cloud",
  "Stellar",
  "Solar",
  "Lunar",
  "Cosmic",
  "Galaxy",
  // Quality
  "Premium",
  "Royal",
  "Imperial",
  "Supreme",
  "Master",
  "Epic",
  "Legend",
  "Mystic",
  "Phoenix",
  "Dragon",
  // Innovation
  "Innovation",
  "Creative",
  "Bright",
  "Brilliant",
  "Genius",
  "Wise",
  "Sharp",
  "Bold",
  "Brave",
  "Strong",
  // Additional Tech
  "Quantum",
  "Neural",
  "Atomic",
  "Binary",
  "Vector",
  "Matrix",
  "Cyber",
  "Virtual",
  "Digital",
  "Crystal",
  // Additional Modern
  "Zenith",
  "Apex",
  "Peak",
  "Summit",
  "Vertex",
  "Pinnacle",
  "Crown",
  "Crest",
  "Peak",
  "Top",
  // Additional Quality
  "Diamond",
  "Golden",
  "Silver",
  "Platinum",
  "Titanium",
  "Steel",
  "Iron",
  "Bronze",
  "Copper",
  "Crystal",
  // Additional Innovation
  "Pioneer",
  "Explorer",
  "Discover",
  "Innovate",
  "Create",
  "Build",
  "Forge",
  "Craft",
  "Design",
  "Shape",
];

const nouns = [
  // Finance
  "Chain",
  "Link",
  "Node",
  "Net",
  "Coin",
  "Token",
  "Pay",
  "Cash",
  "Finance",
  "Money",
  "Swap",
  "Exchange",
  "Trade",
  "Market",
  "Share",
  "Asset",
  "Value",
  "Capital",
  "Credit",
  "Bank",
  // Business
  "Business",
  "Corp",
  "Group",
  "Trust",
  "Fund",
  "Invest",
  "Wealth",
  "Profit",
  "Gain",
  "Growth",
  // Tech
  "Data",
  "Code",
  "Block",
  "Bit",
  "Byte",
  "Web",
  "Cloud",
  "Net",
  "Grid",
  "Mesh",
  // Abstract
  "Mind",
  "Brain",
  "Idea",
  "Think",
  "Vision",
  "View",
  "Sight",
  "Light",
  "Power",
  "Force",
  // Nature
  "Star",
  "Moon",
  "Sun",
  "Sky",
  "Ocean",
  "Earth",
  "Wind",
  "Fire",
  "Storm",
  "Wave",
  // Additional Tech
  "Protocol",
  "System",
  "Network",
  "Platform",
  "Engine",
  "Core",
  "Matrix",
  "Nexus",
  "Hub",
  "Port",
  // Additional Business
  "Venture",
  "Empire",
  "Dynasty",
  "Legacy",
  "Heritage",
  "Domain",
  "Realm",
  "Kingdom",
  "Nation",
  "State",
  // Additional Finance
  "Yield",
  "Stake",
  "Mine",
  "Farm",
  "Pool",
  "Vault",
  "Safe",
  "Bank",
  "Treasury",
  "Reserve",
  // Additional Abstract
  "Pulse",
  "Spirit",
  "Soul",
  "Heart",
  "Dream",
  "Hope",
  "Faith",
  "Trust",
  "Bond",
];

const suffixes = [
  // Tech
  "X",
  "Pro",
  "Plus",
  "Max",
  "AI",
  "Hub",
  "Lab",
  "Tech",
  "Network",
  "Protocol",
  "DAO",
  "DeFi",
  "Verse",
  "World",
  "Zone",
  "Space",
  "Base",
  "Core",
  "Flex",
  "Flow",
  // Business
  "Group",
  "Corp",
  "Inc",
  "Ltd",
  "Co",
  "Sys",
  "Net",
  "Tron",
  "Chain",
  "Link",
  // Features
  "Fast",
  "Safe",
  "Secure",
  "Smart",
  "Power",
  "Force",
  "Swift",
  "Quick",
  "Prime",
  "Ultra",
  // Status
  "Elite",
  "Pro",
  "Master",
  "Expert",
  "King",
  "Lord",
  "Chief",
  "Boss",
  "Lead",
  "Star",
  // Crypto
  "Coin",
  "Token",
  "Swap",
  "Trade",
  "Pay",
  "Cash",
  "Money",
  "Gold",
  "Silver",
  "Bronze",
  // Additional Tech
  "OS",
  "IO",
  "API",
  "SDK",
  "UI",
  "App",
  "Bot",
  "Web",
  "Net",
  "Cloud",
  // Additional Business
  "Global",
  "Inter",
  "Multi",
  "Omni",
  "Pan",
  "Uni",
  "World",
  "Earth",
  "Planet",
  "Cosmos",
  // Additional Features
  "Plus",
  "Pro",
  "Max",
  "Ultra",
  "Super",
  "Hyper",
  "Meta",
  "Next",
  "New",
  "Neo",
  // Additional Status
  "One",
  "First",
  "Prime",
  "Alpha",
  "Beta",
  "Omega",
  "Zero",
  "Infinity",
  "Beyond",
  "Ultimate",
];

// Fungsi untuk menghasilkan supply random (antara 100 juta sampai 1 miliar)
function getRandomSupply() {
  const min = 100000000; // 100 juta
  const max = 1000000000; // 1 miliar
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  adjectives,
  nouns,
  suffixes,
  getRandomSupply,
};
