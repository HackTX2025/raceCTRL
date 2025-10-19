# Atharv's Backend Development Tasks
## AgriSight HackTX 2025 - Backend Team Member

---

## **🚀 IMMEDIATE ACTION PLAN (Next 30 minutes):**

### **1. Initialize Express Server**
```bash
mkdir agrisight-backend
cd agrisight-backend
npm init -y
npm install express cors dotenv axios
npm install -D nodemon
```

### **2. Create Basic Server Structure**
```javascript
// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Your endpoints will go here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## **📋 TODO TASK LIST**

### **Hour 1-2: Core API Integrations (PRIORITY)**

#### **OpenWeatherMap Integration**
- [ ] Get free API key from openweathermap.org
- [ ] Create `GET /api/weather?lat=30.2&lon=-97.7` endpoint
- [ ] Fetch 7-day forecast for Austin, TX
- [ ] Calculate rainfall deficit vs 30mm weekly average
- [ ] Parse: `daily[].temp.day`, `daily[].rain`
- [ ] Return structured JSON with forecast, rainfall_total, rainfall_deficit

#### **Nessie API Integration (Capital One)**
- [ ] Create `GET /api/financial?customerId=demo` endpoint
- [ ] Get account balance: `GET /accounts/{accountId}`
- [ ] Get last 5 transactions: `GET /accounts/{accountId}/purchases`
- [ ] Return structured JSON with balance, transactions, account info

#### **Endpoint Scaffolding**
- [ ] Create `GET /api/ndvi?farmId=demo1` endpoint (Fellipe will implement)
- [ ] Create `POST /api/recommendation` endpoint structure
- [ ] Set up basic route handlers for all 4 endpoints

### **Hour 2-3: Recommendation Engine (With Fellipe)**

#### **Decision Tree Logic Implementation**
- [ ] Implement `getRecommendation(ndvi, rainfallDeficit, balance)` function
- [ ] Handle critical condition: NDVI < 0.3 && rainfallDeficit < -10
- [ ] Handle moderate stress scenarios
- [ ] Handle healthy crop scenarios
- [ ] Return structured response with severity, action, reasoning, confidence

#### **API Integration**
- [ ] Connect recommendation engine to POST endpoint
- [ ] Accept JSON body: `{ ndvi, rainfallDeficit, balance }`
- [ ] Return recommendation with timestamp

### **Hour 3-4: Error Handling & Testing**

#### **Error Handling**
- [ ] Add try-catch blocks for all API calls
- [ ] Implement request caching (store weather/NDVI for 1 hour)
- [ ] Create comprehensive mock data fallbacks
- [ ] Handle API rate limits and timeouts

#### **Testing & Integration**
- [ ] Test all endpoints with Postman/Thunder Client
- [ ] Verify CORS settings for frontend connection
- [ ] Test server restart (ensure no crashes)
- [ ] Verify all mock responses are realistic

### **Hour 4-5: Polish & Documentation**

#### **Server Optimization**
- [ ] Ensure server runs on stable port (localhost:3001)
- [ ] Add request logging for debugging
- [ ] Optimize response times
- [ ] Add health check endpoint: `GET /api/status`

#### **Documentation**
- [ ] Write brief API documentation (endpoint list with params)
- [ ] Create `.env.example` file with required API keys
- [ ] Document request/response formats
- [ ] Add inline code comments

---

## **🔑 CRITICAL API ENDPOINTS TO IMPLEMENT**

### **1. Weather API Endpoint**
```
GET /api/weather?lat=30.2&lon=-97.7
```
**Response Format:**
```json
{
  "location": "Austin, TX",
  "forecast": [
    {
      "date": "2025-10-19",
      "temp": 78,
      "weather": { "main": "Rain", "icon": "10d" },
      "rain": 2.5
    }
  ],
  "rainfall_total": 17.5,
  "rainfall_deficit": -12.5,
  "alert": "Low rainfall expected next 7 days",
  "timestamp": "2025-10-18T14:30:00Z"
}
```

### **2. Financial API Endpoint**
```
GET /api/financial?customerId=demo
```
**Response Format:**
```json
{
  "customerId": "demo123",
  "accountId": "67890",
  "nickname": "Farm Savings Account",
  "balance": 1250.50,
  "transactions": [
    {
      "date": "2025-10-15",
      "description": "Fertilizer Supply Co",
      "amount": -45.00
    }
  ],
  "timestamp": "2025-10-18T14:30:00Z"
}
```

### **3. Recommendation API Endpoint**
```
POST /api/recommendation
```
**Request Body:**
```json
{
  "ndvi": 0.52,
  "rainfallDeficit": -12.5,
  "balance": 1250.50
}
```
**Response Format:**
```json
{
  "severity": "medium",
  "action": "Save additional $50 this week",
  "reasoning": "Moderate crop stress (NDVI: 0.52). Rainfall 12mm below normal. Building reserves recommended.",
  "confidence": 0.78,
  "timestamp": "2025-10-18T14:30:00Z"
}
```

---

## **🎯 RECOMMENDATION ENGINE LOGIC**

### **Decision Matrix Implementation**
```javascript
function getRecommendation(ndvi, rainfallDeficit, balance) {
  let severity, action, reasoning, confidence;
  
  // Critical condition
  if (ndvi < 0.3 && rainfallDeficit < -10) {
    severity = "high";
    action = "Apply for $500 emergency microloan";
    reasoning = `Severe crop stress (NDVI: ${ndvi.toFixed(2)}) combined with drought conditions (${Math.abs(rainfallDeficit)}mm deficit). Immediate financial preparation needed.`;
    confidence = 0.85;
  }
  // Moderate stress + drought
  else if (ndvi < 0.5 && rainfallDeficit < -10) {
    severity = "medium";
    action = "Reduce spending and save $30/week";
    reasoning = `Moderate crop stress (NDVI: ${ndvi.toFixed(2)}) and low rainfall. Build financial buffer for potential yield reduction.`;
    confidence = 0.72;
  }
  // Moderate stress only
  else if (ndvi < 0.5) {
    severity = "medium";
    action = "Monitor conditions and maintain current savings plan";
    reasoning = `Crop health shows moderate stress (NDVI: ${ndvi.toFixed(2)}). Weather conditions stable. Continue monitoring.`;
    confidence = 0.68;
  }
  // Healthy with good savings
  else if (balance > 1000) {
    severity = "low";
    action = "Crops healthy — consider investing in farm equipment or inputs";
    reasoning = `Excellent crop health (NDVI: ${ndvi.toFixed(2)}) and strong financial position. Opportunity for strategic investment.`;
    confidence = 0.90;
  }
  // Healthy but building reserves
  else {
    severity = "low";
    action = "Maintain current plan and build emergency fund to $1,500";
    reasoning = `Good crop health (NDVI: ${ndvi.toFixed(2)}). Focus on building financial resilience.`;
    confidence = 0.82;
  }
  
  return {
    severity,
    action,
    reasoning,
    confidence,
    timestamp: new Date().toISOString()
  };
}
```

---

## **🛡️ MOCK DATA FALLBACKS (CRITICAL FOR DEMO)**

### **Mock Weather Data**
```javascript
const mockWeather = {
  location: "Austin, TX",
  forecast: [
    { date: "2025-10-19", temp: 78, weather: { main: "Rain", icon: "10d" }, rain: 2.5 },
    { date: "2025-10-20", temp: 82, weather: { main: "Clear", icon: "01d" }, rain: 0 },
    { date: "2025-10-21", temp: 85, weather: { main: "Clear", icon: "01d" }, rain: 0 },
    { date: "2025-10-22", temp: 79, weather: { main: "Clouds", icon: "02d" }, rain: 0.5 },
    { date: "2025-10-23", temp: 77, weather: { main: "Rain", icon: "10d" }, rain: 3.2 },
    { date: "2025-10-24", temp: 80, weather: { main: "Clear", icon: "01d" }, rain: 0 },
    { date: "2025-10-25", temp: 83, weather: { main: "Clear", icon: "01d" }, rain: 0 }
  ],
  rainfall_total: 6.2,
  rainfall_deficit: -23.8,
  alert: "Low rainfall expected next 7 days",
  timestamp: new Date().toISOString()
};
```

### **Mock Financial Data**
```javascript
const mockFinancial = {
  customerId: "demo123",
  accountId: "67890",
  nickname: "Farm Savings Account",
  balance: 1250.50,
  transactions: [
    {
      date: "2025-10-15",
      description: "Fertilizer Supply Co",
      amount: -45.00
    },
    {
      date: "2025-10-14",
      description: "Equipment Rental",
      amount: -120.00
    },
    {
      date: "2025-10-13",
      description: "Seed Purchase",
      amount: -230.00
    }
  ],
  timestamp: new Date().toISOString()
};
```

---

## **⚠️ CRITICAL SUCCESS FACTORS**

### **Must-Have for Demo Success:**
1. **API Keys**: Get OpenWeatherMap API key immediately
2. **Mock Data**: Prepare fallback data in case APIs fail during demo
3. **CORS**: Ensure frontend can connect to your backend
4. **Port 3001**: Run server on stable port for frontend integration
5. **Error Handling**: All endpoints must have try-catch blocks
6. **Response Format**: All endpoints must return consistent JSON structure

### **If You Get Stuck:**
- **API issues**: Use mock data immediately, don't waste time debugging
- **Time pressure**: Focus on core endpoints first, polish later
- **Integration problems**: Ensure CORS is properly configured
- **Rate limits**: Implement caching and use mock data as backup

---

## **🔄 INTEGRATION WITH TEAM**

### **Coordinate With:**
- **Fellipe**: NDVI processing endpoint (`/api/ndvi`)
- **Jeslyn & Jace**: Frontend integration and API contract
- **All**: Demo scenarios and testing

### **Communication Points:**
- Share API endpoint URLs and formats
- Test CORS configuration with frontend team
- Coordinate mock data scenarios for demo
- Ensure server stability for final demo

---

## **📞 EMERGENCY CONTACTS & RESOURCES**

### **API Documentation:**
- OpenWeatherMap: https://openweathermap.org/api/one-call-3
- Nessie API: http://api.nessieisreal.com/
- Express.js: https://expressjs.com/

### **Quick Reference:**
- Server port: 3001
- CORS origin: http://localhost:3000 (frontend)
- Mock data: Always have fallbacks ready
- Demo scenarios: 3 different NDVI levels prepared

---

**🚀 START NOW: Initialize your Express server and get the basic structure running!**
