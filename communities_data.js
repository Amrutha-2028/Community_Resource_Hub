//-------------data-------------\\

const communities = [
  {
    name: "One Gen Away Food Bank",
    address: "320 Premier Ct Suite 218, Franklin, TN 37067",
    email: "Annette@onegenaway.com",
    phone: "(844)-642-4673",
    category: "Food Assistance",
    website: "https://onegenaway.com/",
    rating: 4.9
  },
  {
    name: "GraceWorks Ministries",
    address: "104 Southeast Pkwy, Franklin, TN 37064",
    email: "info@graceworkstn.org",
    phone: "(615)-794-9055",
    category: "Food Assistance",
    website: "https://www.graceworkstn.org/",
    rating: 4.5
  },
  {
    name: "The Well Outreach",
    address: "5306 Main St, Spring Hill, TN 37174",
    email: "info@thewelloutreach.org",
    phone: "615-302-9355",
    category: "Food Assistance",
    website: "https://thewelloutreach.org/",
    rating: 4.2
  },
  {
    name: "Nolensville Food Pantry",
    address: "1668 Sunset Rd, Nolensville, TN 37135",
    email: "info@nolensvillefoodpantry.org",
    phone: "615-283-8197",
    category: "Food Assistance",
    website: "https://www.nolensvillefoodpantry.org/",
    rating: 3.9
  },
  {
    name: "Habitat for Humanity (Williamson-Maury)",
    address: "511 West Meade Blvd, Franklin, TN 37064",
    email: "krandell@hfhwm.org",
    phone: "615-690-8090",
    category: "Housing & Community Development",
    website: "https://www.hfhwm.org/",
    rating: 4.9
  },
  {
    name: "Franklin Housing Authority",
    address: "200 Spring Street, Franklin, TN 37064",
    email: null,
    phone: "(615)-794-1247",
    category: "Housing & Community Development",
    website: "https://www.franklinhousingauthority.com/",
    rating: 3.5
  },
  {
    name: "Housing Development in City of Franklin, TN",
    address: "109 3rd Avenue South, Franklin, TN 37064",
    email: null,
    phone: "615-791-3217",
    category: "Housing & Community Development",
    website: "https://www.franklintn.gov/services/development-building-services/development-building-services/housing-development",
    rating: 4.0
  },
  {
    name: "Franklin First United Methodist Church",
    address: "120 Aldersgate Way, Franklin, TN 37069",
    email: "jtodd@franklinfumc.org",
    phone: "615-794-2734",
    category: "Religious Community Assistance",
    website: "https://franklinfumc.org/",
    rating: 4.6
  },
  {
    name: "FrankTown Open Hearts",
    address: "320 Main Street, Suite 200, Franklin, TN 37064",
    email: "Chris@franktownopenhearts.com",
    phone: "615-807-0782",
    category: "Religious Community Assistance",
    website: "https://franktownopenhearts.com/",
    rating: 4.8
  },
  {
    name: "Williamson County Animal Shelter",
    address: "1006 Grigsby Hayes Court Franklin, TN 37064",
    email: "wcras@wilco.org",
    phone: "615-790-5590",
    category: "Animal Welfare",
    website: "https://www.adoptwcac.org/269/Fulfill-Community-Service-Hours",
    rating: 4.4
  },
  {
    name: "Williamson County Animal Hospital",
    address: "1126 Murfreesboro Road, Franklin, TN 37064",
    email: "info@wcah.org",
    phone: "(615) 794-7113",
    category: "Animal Welfare",
    website: "https://www.wcah.org/",
    rating: 4.3
  },
  {
    name: "Animal Care Center of Brentwood",
    address: "283 Wilson Pike Circle, Brentwood, TN 37027",
    email: "animalcarecenterofbrentwood@comcast.net",
    phone: "(615) 371-1242",
    category: "Animal Welfare",
    website: "https://www.animalcarecenterofbrentwood.com/",
    rating: 3.8
  },
  {
    name: "Keep Williamson Beautiful",
    address: "Franklin, TN",
    email: "belinda.brooks@williamsoncounty-tn.gov",
    phone: "615-786-0166",
    category: "Environmental & Community Clean-Up",
    website: "https://www.williamsoncounty-tn.gov/1453/Contact-KWB",
    rating: 4.9
  },
  {
    name: "Harpeth Conservancy",
    address: "215 Jamestown Park Road, Suite 101, Brentwood, TN 37027",
    email: null,
    phone: "(615) 790-9767",
    category: "Environmental & Community Clean-Up",
    website: "https://harpethconservancy.org/",
    rating: 4.5
  },
  {
    name: "Cumberland River Compact",
    address: "1320 Adams St #1040, Nashville, TN 37208",
    email: "info@cumberlandrivercompact.org",
    phone: "(615) 837-1151",
    category: "Environmental & Community Clean-Up",
    website: "https://cumberlandrivercompact.org/",
    rating: 4.7
  },
  {
    name: "Tennessee Environmental Council (TEC)",
    address: "One Vantage Way, Suite E-250, Nashville, TN 37228",
    email: "tec@tectn.org",
    phone: "615-248-6500",
    category: "Environmental & Community Clean-Up",
    website: "https://www.tectn.org/",
    rating: 4.2
  },
  {
    name: "Volunteens TN / Volunteer Tennessee",
    address: "312 Rosa L. Parks Ave, 18th Floor, Nashville, TN 37243",
    email: "volunteer.tennessee@tn.gov",
    phone: "(615) 253-1426",
    category: "Youth Volunteer Programs",
    website: "https://www.tn.gov/volunteer-tennessee.html",
    rating: 4.0
  },
  {
    name: "Williamson County Library Volunteering",
    address: "1314 Columbia Ave, Franklin, TN 37064",
    email: "deborah.reschke@williamsoncounty-tn.gov",
    phone: "615-786-0142",
    category: "Youth Volunteer Programs",
    website: "https://wcpltn.org/306/Volunteer",
    rating: 4.4
  },
  {
    name: "The John P. Holt Brentwood Library Volunteering",
    address: "8109 Concord Rd, Brentwood, TN 37027",
    email: "VolunteerCoordinator@brentwoodtn.gov",
    phone: "(615) 371-0090",
    category: "Youth Volunteer Programs",
    website: "https://library.brentwoodtn.gov/Support/Volunteer",
    rating: 4.9
  },
  {
    name: "Hands On Nashville / United Way",
    address: "250 Venture Circle, Nashville, TN 37228",
    email: "hon@unitedwaygn.org",
    phone: "(615) 298-1108",
    category: "Non-Profit Organizations",
    website: "https://handson.unitedwaygreaternashville.org/organization/001A000000mJ3pGIAS?layoutViewMode=tablet",
    rating: 4.8
  },
  {
    name: "American Red Cross",
    address: "129 W Fowlkes St # 100, Franklin, TN 37064",
    email: "hospitalsupport@redcross.org",
    phone: "800-733-2767",
    category: "Non-Profit Organizations",
    website: "https://www.redcross.org/local/tennessee.html",
    rating: 4.6
  },
  {
    name: "We Care Williamson County",
    address: "104 Southeast Pkwy, Suite 101, Franklin, TN 37064",
    email: "info@wecarewilliamsoncounty.org",
    phone: "(615) 208-5068",
    category: "Non-Profit Organizations",
    website: "https://www.wecarewilliamsoncounty.org/",
    rating: 4.1
  },
  {
    name: "The Refuge Center for Counseling",
    address: "4317 Long Lane, Franklin, TN 37064",
    email: "info@therefugecenter.org",
    phone: "(615) 591-5262",
    category: "Mental Health Services",
    website: "https://refugecenter.org/",
    rating: 4.7
  },
  {
    name: "Mercy Community Healthcare",
    address: "1113 Murfreesboro Rd, Franklin, TN 37064",
    email: "info@mercytn.org",
    phone: "(615) 790-0567",
    category: "Mental Health Services",
    website: "https://mercytn.org/",
    rating: 4.5
  },
  {
    name: "Williamson County Mental Health",
    address: "407 N. Monroe St., Suite 220, Marion, IL 62959",
    email: "708board@williamsoncountyil.gov",
    phone: "988",
    category: "Mental Health Services",
    website: "https://williamsoncountymentalhealth.org/services/",
    rating: 3.7
  },
  {
    name: "Find Hope Franklin",
    address: "1001 N James M Campbell Blvd, Columbia, TN 38401",
    email: "info@therefugecenter.org",
    phone: "(877) 342-1450",
    category: "Mental Health Services",
    website: "https://findhopefranklin.com/",
    rating: 4.2
  },
  {
    name: "NAMI - Williamson & Maury Counties",
    address: "PO Box 680273, Franklin, TN 37068",
    email: "namiwilliamsontn@gmail.com",
    phone: "615-567-3793",
    category: "Mental Health Services",
    website: "https://www.nami.org/affiliate/tennessee/nami-williamson-and-maury-counties-tn/",
    rating: 4.6
  },
  {
    name: "Williamson County Sheriff",
    address: "408 Century Ct, Franklin, TN 37064",
    email: "info@williamsoncountysheriffTN.com",
    phone: "(615) 790-5560",
    category: "Emergency Services",
    website: "https://williamsoncountysherifftn.com/",
    rating: 4.4
  },
  {
    name: "Office of Public Safety",
    address: "304 Beasley Drive, Franklin, TN 37064",
    email: null,
    phone: "(615) 790-5757",
    category: "Emergency Services",
    website: "http://www.williamsonready.org/",
    rating: 4.0
  },
  {
    name: "Mary Lee Bunch Associates",
    address: "7113 Peach Ct, Suite 111, Brentwood, TN 37027",
    email: "info@maryleebunch.com",
    phone: "(615) 377-6370",
    category: "Education & Tutoring",
    website: "https://www.maryleebunch.com/",
    rating: 4.3
  },
  {
    name: "Williamson County Public Library Tutoring",
    address: "1314 Columbia Ave, Franklin, TN 37064",
    email: "library.friends@williamsoncounty-tn.gov",
    phone: "(615) 595-1243",
    category: "Education & Tutoring",
    website: "https://wcpltn.org/403/Homework-Help-Test-Prep",
    rating: 4.9
  },
  {
    name: "Huntington Learning Center",
    address: "95 Seaboard Lane, Suite 106, Brentwood, TN 37027",
    email: null,
    phone: "(615) 376-8000",
    category: "Education & Tutoring",
    website: "https://huntingtonhelps.com/locations/brentwood-tn/llp/tutoring/",
    rating: 4.1
  }
];