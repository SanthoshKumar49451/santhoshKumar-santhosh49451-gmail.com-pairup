 Mentorship Dashboard – Frontend Intern


##  Project Overview  
This project is a **Mentorship Dashboard** built using **React** and **Redux Toolkit**. It allows mentors to:
- Track mentee progress  
- View feedback from mentees  
- Manage and complete tasks  
- Monitor upcoming sessions  

This simulates a simple mentorship platform to enhance mentor-mentee engagement.



## 🛠 Tech Stack  
- ⚛️ React  
- 🧰 Redux Toolkit  
- 🌐 React Router DOM  
- 🎨 Tailwind CSS  


## 🧾 Installation Instructions  

### 🔄 Clone the Repository  
```bash
git clone https://github.com/SanthoshKumar49451/santhoshKumar-santhosh49451-gmail.com-pairup.git
cd santhoshKumar-santhosh49451-gmail.com-pairup
📦 Install Dependencies
bash
Copy
Edit
npm install
▶️ Run the Application
bash
Copy
Edit
npm start
📁 Folder Structure
This project is organized using a feature-based structure with Redux Toolkit:

bash
Copy
Edit
src/
├── components/                # React UI components
│   ├── FeedBackComponent.jsx
│   ├── HeaderComponent.jsx
│   ├── MentorComponent.jsx
│   ├── SessionComponent.jsx
│   └── TaskComponent.jsx
│
├── features/                  # Redux Toolkit slices
│   ├── feedbackSlice.js
│   ├── menteeSlice.js
│   ├── taskSlice.js
│   └── upcomingSlice.js
│
├── store/
│   └── store.js               # Redux store configuration
│
├── App.js                     # Main application
├── index.js                   # React DOM render
├── App.css                    # Optional custom styles
└── index.css                  # Tailwind base styles


📸 Screenshots
ℹ️ Place screenshots in a folder called /screenshots and reference below

🧑‍🎓 Mentee Info

✅ Tasks

📅 Sessions

💬 Feedback

🚧 Known Issues
Redux state is static (no backend persistence)

No authentication or login system

No real-time data updates

🌐 Live Demo:
🔗 https://santhosh-pairup.vercel.app/

📬 Contact
📧 Email: santhoshkumar49451@gmail.com
