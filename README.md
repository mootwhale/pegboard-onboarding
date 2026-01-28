# Pegboard Project Onboarding App

A quick and easy way to add new projects to your Monday.com board.

## 🚀 Deploy to Vercel (Easiest)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and follow the steps

### Step 2: Upload This Project to GitHub
1. Go to [github.com/new](https://github.com/new)
2. Name it `pegboard-onboarding`
3. Click "Create repository"
4. Upload all files from this folder (drag & drop works!)

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Add New Project"
4. Select your `pegboard-onboarding` repository
5. Click "Deploy"
6. Wait ~2 minutes for it to build
7. **Done!** You'll get a URL like `pegboard-onboarding.vercel.app`

### Step 4: Share with Your Team
Send the URL to your team. They can bookmark it for quick access!

---

## 📁 Project Structure

```
pegboard-onboarding/
├── public/
│   └── index.html      # HTML template
├── src/
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── package.json        # Dependencies
└── README.md           # This file
```

---

## 🔧 Local Development (Optional)

If you want to test locally before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Opens at http://localhost:3000
```

---

## ⚡ Next Steps (Optional Enhancements)

To make the app actually create items in Monday.com (instead of just simulating):

1. Get a Monday.com API token from your admin
2. Set it as an environment variable in Vercel
3. Update the `handleSubmit` function to call the Monday.com API

Contact your Monday.com admin or let me know if you'd like help with this!

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
