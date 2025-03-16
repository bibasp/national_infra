const projectsData = [
    {
        "project_id": "TR-HW-001",
        "project_name": "Kathmandu-Tarai Expressway",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Bagmati",
        "status": "Ongoing",
        "physical_progress_percent": "37",
        "start_date": "2017-04-01"
    },
    {
        "project_id": "TR-HW-002",
        "project_name": "Mid-Hills Highway",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-003",
        "project_name": "Terai Hulaki Marg",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Madhesh",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-004",
        "project_name": "North-South Koshi Corridor",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Madhesh",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-005",
        "project_name": "North-South Kaligandaki Corridor",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Gandhaki",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-006",
        "project_name": "North-South Karnali Corridor",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Karnali",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-007",
        "project_name": "Tokha-Chhahare tunnel",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Bagmati",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-008",
        "project_name": "Hilsa-Simkot road",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Karnali",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-HW-009",
        "project_name": "Kimathanka-Khandbari road and bridge",
        "type_main_category": "Transportation",
        "type_sub_category": "Highway",
        "Province": "Koshi",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-RW-001",
        "project_name": "East-West Railway",
        "type_main_category": "Transportation",
        "type_sub_category": "Railway",
        "Province": "Multiple Provinces",
        "status": "Unknown",
        "physical_progress_percent": "5",
        "start_date": "2008-07-01"
    },
    {
        "project_id": "TR-RW-002",
        "project_name": "Jilong-Kerung-Kathmandu Cross-Border Railway",
        "type_main_category": "Transportation",
        "type_sub_category": "Railway",
        "Province": "Bagmati",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TR-AP-001",
        "project_name": "Gautam Buddha International Airport",
        "type_main_category": "Transportation",
        "type_sub_category": "Airport",
        "Province": "Lumbini",
        "status": "Completed and operational",
        "physical_progress_percent": "100",
        "start_date": null
    },
    {
        "project_id": "TR-AP-002",
        "project_name": "Pokhara International Airport",
        "type_main_category": "Transportation",
        "type_sub_category": "Airport",
        "Province": "Gandaki",
        "status": "Completed and operational",
        "physical_progress_percent": "100",
        "start_date": null
    },
    {
        "project_id": "TR-AP-003",
        "project_name": "Nijgadh International Airport",
        "type_main_category": "Transportation",
        "type_sub_category": "Airport",
        "Province": "Madhesh",
        "status": "Halted",
        "physical_progress_percent": "0",
        "start_date": null
    },
    {
        "project_id": "EN-HP-001",
        "project_name": "Upper Tamakoshi Hydroelectric Project",
        "type_main_category": "Energy",
        "type_sub_category": "Hydropower",
        "Province": "Bagmati",
        "status": "Completed and operational",
        "physical_progress_percent": "100",
        "start_date": null
    },
    {
        "project_id": "EN-HP-002",
        "project_name": "Budhigandaki Hydroelectric Project",
        "type_main_category": "Energy",
        "type_sub_category": "Hydropower",
        "Province": "Multiple Provinces",
        "status": "Planning phase",
        "physical_progress_percent": "0",
        "start_date": null
    },
    {
        "project_id": "EN-HP-003",
        "project_name": "West Seti Hydropower Project",
        "type_main_category": "Energy",
        "type_sub_category": "Hydropower",
        "Province": "Sudurpaschim",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "EN-TL-001",
        "project_name": "Nepal's Energy Infrastructure Overhaul",
        "type_main_category": "Energy",
        "type_sub_category": "Transmission Line",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "EN-TL-002",
        "project_name": "Jilong-Kerung-Rasuwagadhi-Chilime Transmission Line",
        "type_main_category": "Energy",
        "type_sub_category": "Transmission Line",
        "Province": "Bagmati",
        "status": "Planning phase",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "WA-IR-001",
        "project_name": "Sikta Irrigation Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Lumbini",
        "status": "Ongoing",
        "physical_progress_percent": "80.16",
        "start_date": "2004-07-01"
    },
    {
        "project_id": "WA-IR-002",
        "project_name": "Rani Jamara Kulariya Irrigation Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Sudurpaschim",
        "status": "Unknown",
        "physical_progress_percent": "19.35",
        "start_date": null
    },
    {
        "project_id": "WA-IR-003",
        "project_name": "Sunkoshi Marin Diversion Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": "34.4",
        "start_date": null
    },
    {
        "project_id": "WA-IR-004",
        "project_name": "Babai Irrigation Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "WA-IR-005",
        "project_name": "Bheri Babai Diversion Multipurpose Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "WA-IR-006",
        "project_name": "Mahakali Irrigation Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Irrigation",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "WA-DW-001",
        "project_name": "Melamchi Water Supply Project",
        "type_main_category": "Water Infrastructure",
        "type_sub_category": "Drinking Water",
        "Province": "Bagmati",
        "status": "Partially operational",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "RU-RD-001",
        "project_name": "Provincial and Local Roads Improvement Program-Phase 1",
        "type_main_category": "Rural and Urban Development",
        "type_sub_category": "Provincial and Local Roads",
        "Province": "Multiple Provinces",
        "status": "Recently launched",
        "physical_progress_percent": null,
        "start_date": "2024-11-01"
    },
    {
        "project_id": "RU-RD-002",
        "project_name": "Rural Connectivity Improvement Project",
        "type_main_category": "Rural and Urban Development",
        "type_sub_category": "Rural Roads",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": "2018"
    },
    {
        "project_id": "RU-UD-001",
        "project_name": "Nepal Urban Governance and Infrastructure Project",
        "type_main_category": "Rural and Urban Development",
        "type_sub_category": "Urban Infrastructure",
        "Province": "Multiple Provinces",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TC-CH-001",
        "project_name": "Pashupati Area Development Trust",
        "type_main_category": "Tourism and Cultural Infrastructure",
        "type_sub_category": "Cultural Infrastructure",
        "Province": "Bagmati",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    {
        "project_id": "TC-CH-002",
        "project_name": "Lumbini Development Trust",
        "type_main_category": "Tourism and Cultural Infrastructure",
        "type_sub_category": "Cultural Infrastructure",
        "Province": "Lumbini",
        "status": "Ongoing",
        "physical_progress_percent": null,
        "start_date": null
    },
    // Add more sample projects here...
];
