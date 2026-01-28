# Pegboard Project Onboarding App


---

## 📁 Project Structure

```
pegboard-onboarding/
├── public/
│   └── index.html        # HTML template
├── src/
│   ├── App.js            # Main app component (with Monday.com API)
│   └── index.js          # Entry point
├── package.json          # Dependencies
├── .env.example          # Example environment variables
├── .gitignore            # Files to ignore in git
└── README.md             # This file
```

---

## 🔧 Local Development (Optional)

If you want to test locally before deploying:

```bash
# Create a .env file with your API token
cp .env.example .env
# Edit .env and add your real token

# Install dependencies
npm install

# Start development server
npm start

# Opens at http://localhost:3000
```

---

## 📋 Features

- ✅ Customer/Project Name input
- ✅ Auto-populated Order Date
- ✅ Group selection (Pegboard Projects, Quotes, etc.)
- ✅ Firm In-Hands Date picker
- ✅ CSR dropdown with your team
- ✅ Item description field
- ✅ Priority selection (Critical, High, Medium, Low)
- ✅ Notes field
- ✅ Mobile-friendly design
- ✅ **Live Monday.com integration** — creates real items!

---

## 🗂️ Monday.com Field Mapping

| App Field | Monday.com Column |
|-----------|-------------------|
| Customer/Project Name | Item Name |
| Order Date | Order Date (auto: today) |
| Group | Board Group |
| Firm In-Hands Date | Firm in Hands Date |
| CSR | CSR (People column) |
| Item | Item |
| Priority | Priority |
| Notes | Notes |

