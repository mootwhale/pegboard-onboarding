# Pegboard Project Onboarding App

A quick and easy way to add new projects to your Monday.com board.

## 🚀 Deploy to Vercel (10-15 minutes)

### Step 1: Get Your Monday.com API Token
1. Go to [monday.com](https://monday.com) and log in
2. Click your **profile picture** (bottom left)
3. Click **Developers**
4. Click **My Access Tokens** in the left sidebar
5. Click **Show** or **Generate** to get your token
6. **Copy the token** — you'll need it in Step 4

> ⚠️ Keep this token secret! Anyone with it can access your Monday.com data.

### Step 2: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and follow the steps

### Step 3: Upload This Project to GitHub
1. Go to [github.com/new](https://github.com/new)
2. Name it `pegboard-onboarding`
3. Click "Create repository"
4. Upload all files from this folder (drag & drop works!)

### Step 4: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Click **Add New Project**
4. Select your `pegboard-onboarding` repository
5. **Before clicking Deploy**, expand **Environment Variables**
6. Add this variable:
   - **Name:** `REACT_APP_MONDAY_API_TOKEN`
   - **Value:** *(paste your Monday.com API token from Step 1)*
7. Click **Deploy**
8. Wait ~2 minutes for it to build
9. **Done!** You'll get a URL like `pegboard-onboarding.vercel.app`

### Step 5: Share with Your Team
Send the URL to your team. They can bookmark it for quick access!

---

## 🔐 Security Note

The API token is stored securely in Vercel's environment variables and is never exposed in the browser. However, anyone with access to the app URL can create items in your Monday.com board, so only share the URL with your team.

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

