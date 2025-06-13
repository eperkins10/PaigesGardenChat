export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  completionDate: string;
  gallery: {
    id: string;
    url: string;
    caption: string;
    type: 'before' | 'after' | 'process' | 'detail';
  }[];
  details: {
    size: string;
    duration: string;
    challenges: string[];
    solutions: string[];
    plants: string[];
  };
}

export const projects: Project[] = [
  {
    id: "modern-drought-resistant",
    title: "Modern Drought-Resistant Garden",
    location: "Encinitas Hills",
    description: "Transformed a water-hungry lawn into a stunning succulent paradise with native plantings that thrive in San Diego's climate.",
    beforeImage: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    afterImage: "https://images.pexels.com/photos/1104974/pexels-photo-1104974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Drought-Tolerant",
    completionDate: "Spring 2024",
    gallery: [
      {
        id: "1",
        url: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Original lawn area before transformation",
        type: "before"
      },
      {
        id: "2",
        url: "https://images.pexels.com/photos/1104974/pexels-photo-1104974.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Completed drought-resistant garden with native succulents",
        type: "after"
      },
      {
        id: "3",
        url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Detailed view of succulent arrangements",
        type: "detail"
      },
      {
        id: "4",
        url: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Stone pathway integration",
        type: "detail"
      },
      {
        id: "5",
        url: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Installation process - soil preparation",
        type: "process"
      },
      {
        id: "6",
        url: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Planting phase with drought-tolerant selections",
        type: "process"
      }
    ],
    details: {
      size: "1,200 sq ft",
      duration: "3 weeks",
      challenges: ["Poor drainage", "Steep slope", "Water restrictions"],
      solutions: ["Installed French drain system", "Terraced planting areas", "100% drought-tolerant plant palette"],
      plants: ["Agave americana", "Lavandula stoechas", "Rosmarinus officinalis", "Salvia leucantha", "Penstemon heterophyllus"]
    }
  },
  {
    id: "coastal-contemporary",
    title: "Coastal Contemporary Landscape",
    location: "Cardiff by the Sea",
    description: "Created outdoor living spaces with Mediterranean plants and natural stone hardscaping that complement the coastal environment.",
    beforeImage: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    afterImage: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Contemporary",
    completionDate: "Summer 2024",
    gallery: [
      {
        id: "7",
        url: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Before: Basic lawn and minimal landscaping",
        type: "before"
      },
      {
        id: "8",
        url: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "After: Contemporary design with natural stone",
        type: "after"
      },
      {
        id: "9",
        url: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Mediterranean plant selections",
        type: "detail"
      },
      {
        id: "10",
        url: "https://images.pexels.com/photos/7728849/pexels-photo-7728849.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Stone hardscaping installation",
        type: "process"
      }
    ],
    details: {
      size: "2,000 sq ft",
      duration: "4 weeks",
      challenges: ["Salt air exposure", "Sandy soil", "Wind protection needed"],
      solutions: ["Salt-tolerant plant selection", "Soil amendment with compost", "Strategic windbreak plantings"],
      plants: ["Westringia fruticosa", "Coprosma repens", "Phormium tenax", "Echium candicans", "Carpobrotus edulis"]
    }
  },
  {
    id: "sustainable-family-garden",
    title: "Sustainable Family Garden",
    location: "Leucadia",
    description: "Designed a kid-friendly space with edible gardens and drought-tolerant play areas that the whole family can enjoy.",
    beforeImage: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    afterImage: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Family-Friendly",
    completionDate: "Fall 2023",
    gallery: [
      {
        id: "11",
        url: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Before: Unused backyard space",
        type: "before"
      },
      {
        id: "12",
        url: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "After: Family-friendly garden with play areas",
        type: "after"
      },
      {
        id: "13",
        url: "https://images.pexels.com/photos/1104974/pexels-photo-1104974.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Edible garden section with raised beds",
        type: "detail"
      },
      {
        id: "14",
        url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Safe play area with soft landscaping",
        type: "detail"
      }
    ],
    details: {
      size: "1,800 sq ft",
      duration: "5 weeks",
      challenges: ["Child safety requirements", "Edible plant integration", "Low maintenance needs"],
      solutions: ["Non-toxic plant selections", "Raised bed vegetable gardens", "Automated irrigation system"],
      plants: ["Citrus trees", "Rosmarinus officinalis", "Thymus vulgaris", "Salvia officinalis", "Fragaria chiloensis"]
    }
  },
  {
    id: "desert-modern-oasis",
    title: "Desert Modern Oasis",
    location: "Solana Beach",
    description: "Modern desert landscaping with architectural plants and contemporary water features that create a serene retreat.",
    beforeImage: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    afterImage: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Modern Desert",
    completionDate: "Winter 2024",
    gallery: [
      {
        id: "15",
        url: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Before: Plain concrete and minimal vegetation",
        type: "before"
      },
      {
        id: "16",
        url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "After: Modern desert oasis with architectural plants",
        type: "after"
      },
      {
        id: "17",
        url: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Contemporary water feature detail",
        type: "detail"
      },
      {
        id: "18",
        url: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        caption: "Architectural plant arrangements",
        type: "detail"
      }
    ],
    details: {
      size: "1,500 sq ft",
      duration: "4 weeks",
      challenges: ["Modern aesthetic requirements", "Water feature integration", "Architectural plant placement"],
      solutions: ["Clean-lined hardscaping", "Recirculating water system", "Strategic focal point plantings"],
      plants: ["Agave attenuata", "Aloe arborescens", "Euphorbia tirucalli", "Senecio mandraliscae", "Aeonium arboreum"]
    }
  }
];