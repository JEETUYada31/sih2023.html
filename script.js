    // Initially hide the search form
        document.addEventListener("DOMContentLoaded", function() {
            const searchForm = document.querySelector('.search-form');
            searchForm.style.display = 'none';
        });

        function toggleSearch() {
            const searchForm = document.querySelector('.search-form');
            if (searchForm.style.display === 'none' || searchForm.style.display === '') {
                searchForm.style.display = 'block';
            } else {
                searchForm.style.display = 'none';
            }
        }

        // JavaScript to populate the datalist options
        const departmentOptions = [
            "Emergency Department (ER)",
            "Cardiology",
            "Orthopedics",
            "Neurology",
            "Oncology",
            "Pediatrics",
            "Gynecology",
            "Obstetrics",
            "Dermatology",
            "ENT (Ear, Nose, and Throat)",
            "Gastroenterology",
            "Pulmonology",
            "Endocrinology",
            "Urology",
            "Nephrology",
            "Rheumatology",
            "Psychiatry",
            "Radiology",
            "Pathology",
            "Anesthesiology",
            "Physical Therapy",
            "Occupational Therapy",
            "Nutrition and Dietetics",
            "Pharmacy",
            "Infectious Diseases",
            "Hematology",
            "Allergy and Immunology",
            "Cardiothoracic Surgery",
            "Vascular Surgery",
            "Plastic and Reconstructive Surgery",
            // Add more department options here
        ];

        const datalist = document.getElementById('departmentOptions');
        departmentOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            datalist.appendChild(option);
        });

        // JavaScript code for displaying hospitals
        const hospitals = {
            "Emergency Department (ER)": [
                {
                    name: "Hospital A",
                    location: "123 Main Street, City, Country",
                    contact: "+123-456-7890"
                },
                {
                    name: "Hospital B",
                    location: "456 Elm Street, City, Country",
                    contact: "+123-789-4560"
                },
                
            ],
            "Cardiology": [
                
                {
                    name: "Hospital C",
                    location: "321 Elm Street, City, Country",
                    contact: "+123-555-1234"
                },
                {
                    name: "Hospital D",
                    location: "567 Oak Street, City, Country",
                    contact: "+123-888-7777"
                },
                
            ],
            "Orthopedics":[
              {
                    name: "Hospital E",
                    location: "999 Maple Street, City, Country",
                    contact: "+123-111-2222"
                },
                {
                    name: "Hospital F",
                    location: "567 Oak Street, City, Country",
                    contact: "+123-888-7777"
                },
            ],
            // Add more departments and hospitals as needed
        };

        function displayHospitals(selectedDepartment) {
            const hospitalList = document.getElementById("hospitalList");
            hospitalList.innerHTML = ""; // Clear previous results

            if (hospitals[selectedDepartment]) {
                const hospitalsForDepartment = hospitals[selectedDepartment];
                if (hospitalsForDepartment.length > 0) {
                    const ul = document.createElement("ul");
                    hospitalsForDepartment.forEach(hospital => {
                        const li = document.createElement("li");
                        li.innerHTML = `
                            <strong>${hospital.name}</strong><br>
                            Location: ${hospital.location}<br>
                            Contact: ${hospital.contact}
                        `;
                        ul.appendChild(li);
                    });
                    hospitalList.appendChild(ul);
                } else {
                    hospitalList.textContent = "No hospitals found for the selected department.";
                }
            }
        }

        // Event listener for input changes
        const departmentSearch = document.getElementById("departmentSearch");
        departmentSearch.addEventListener("input", function () {
            const selectedDepartment = this.value;
            displayHospitals(selectedDepartment);
        });

        // Function to pre-fill the search field and display hospitals for Emergency Department
        function searchEmergency() {
            const departmentSearch = document.getElementById('departmentSearch');
            departmentSearch.value = "Emergency Department (ER)";
            displayHospitals("Emergency Department (ER)");
        }

        // JavaScript code for displaying doctor schedules and availability
        const doctorSchedules = {
            "Hospital A": [
                {
                    doctorName: "Dr. John Doe",
                    specialty: "Emergency Department (ER)",
                    availability: "All Day: 9 AM - 6PM"
                },
                // Add more doctors and their schedules
            ],
            "Hospital B": [
                {
                    doctorName: "Dr. Jane Smith",
                    specialty: "Emergency Department (ER)",
                    availability: "Monday: 8 AM - 3 PM, Thursday: 9 AM - 4 PM"
                },
                
                // Add more doctors and their schedules
            ],
            "Hospital C": [
                {
                    doctorName: "Dr. Lily",
                    specialty: "Cardiology",
                    availability: "Tuesday: 8 AM - 3 PM, Thursday: 9 AM - 4 PM"
                },
            
                // Add more doctors and their schedules
            ],
            "Hospital D": [
                {
                    doctorName: "Dr. Den",
                    specialty: "Cardiology",
                    availability: "Wednesday: 8 AM - 3 PM, Thursday: 9 AM - 4 PM"
                },
            
                // Add more doctors and their schedules
            ],

            "Hospital E": [
                {
                    doctorName: "Dr.  Aman Kmar",
                    specialty: "Orthopedics",
                    availability: "Tuesday: 8 AM - 3 PM, Thursday: 9 AM - 4 PM"
                },
                // Add schedules for other hospitals
            ],
            "Hospital F": [
                {
                    doctorName: "Dr.  Saket Kmar",
                    specialty: "Orthopedics",
                    availability: "Tuesday: 8 AM - 3 PM, Thursday: 9 AM - 4 PM"
                },
                // Add schedules for other hospitals
            ],
            // Add schedules for other hospitals
        };

        function displayDoctorInfo(hospitalName) {
            const doctorInfoContainer = document.getElementById("doctorInfoContainer");
            const doctorInfo = document.getElementById("doctorInfo");
            
            if (doctorSchedules[hospitalName]) {
                const doctorsForHospital = doctorSchedules[hospitalName];
                let infoHTML = "<strong>Doctors at " + hospitalName + ":</strong><br>";
                doctorsForHospital.forEach(doctor => {
                    infoHTML += `<p><strong>${doctor.doctorName}</strong><br>Specialty: ${doctor.specialty}<br>Availability: ${doctor.availability}</p>`;
                });
                doctorInfo.innerHTML = infoHTML;
                doctorInfoContainer.style.display = "block";
            } else {
                doctorInfoContainer.style.display = "none";
            }
        }

        // Event listener for clicking on a hospital
        const hospitalList = document.getElementById("hospitalList");
        hospitalList.addEventListener("click", function (event) {
            const clickedHospital = event.target.textContent;
            displayDoctorInfo(clickedHospital);
        });

        // Function to handle booking appointments
        function toggleAppointmentForm() {
            const appointmentForm = document.getElementById('appointmentForm');
            if (appointmentForm.style.display === 'none' || appointmentForm.style.display === '') {
                appointmentForm.style.display = 'block';
            } else {
                appointmentForm.style.display = 'none';
            }
        }

        const appointmentFormFields = document.getElementById('appointmentFormFields');
        appointmentFormFields.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Capture user input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const appointmentDateTime = document.getElementById('appointmentDateTime').value;

            // Perform validation (you can add more validation as needed)
            if (!name || !email || !phone || !appointmentDateTime) {
                alert('Please fill in all fields.');
                return;
            }

            // You can send the appointment details to a server or perform other actions here
            // For now, let's display an alert with the captured data
            alert(`Appointment Requested\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAppointment Date and Time: ${appointmentDateTime}`);
            
            // Optionally, you can reset the form
            appointmentFormFields.reset();
        });
        
