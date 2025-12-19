import streamlit as st
from datetime import datetime

# Page configuration
st.set_page_config(
    page_title="PropCode - Know What You Can Build Before You Buy",
    page_icon="🏠",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS for styling
st.markdown("""
    <style>
    .main {
        padding: 0;
    }
    .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .hero-section {
        background: linear-gradient(to bottom, #EFF6FF, #FFFFFF);
        padding: 4rem 2rem;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    .hero-title {
        font-size: 3.5rem;
        font-weight: bold;
        color: #111827;
        margin-bottom: 1rem;
    }
    .hero-subtitle {
        color: #2563EB;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .hero-description {
        font-size: 1.5rem;
        color: #4B5563;
        margin: 2rem auto;
        max-width: 800px;
        text-align: center;
    }
    .problem-box {
        background-color: #FEF2F2;
        border-left: 4px solid #EF4444;
        padding: 1.5rem;
        border-radius: 0 8px 8px 0;
        margin-bottom: 1.5rem;
    }
    .solution-box {
        background-color: #FFFFFF;
        border-left: 4px solid #10B981;
        padding: 1.5rem;
        border-radius: 0 8px 8px 0;
        margin-bottom: 1.5rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .section-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #111827;
        text-align: center;
        margin-bottom: 2rem;
    }
    .solution-intro {
        background-color: #FFFFFF;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
    }
    .solution-intro-text {
        font-size: 1.25rem;
        color: #374151;
        text-align: center;
    }
    .waitlist-container {
        background: linear-gradient(to bottom, #FFFFFF, #F9FAFB);
        padding: 3rem 2rem;
        border-radius: 10px;
    }
    .waitlist-box {
        background-color: #FFFFFF;
        border-radius: 8px;
        padding: 3rem;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        border: 1px solid #E5E7EB;
        max-width: 600px;
        margin: 0 auto;
    }
    .success-box {
        background-color: #F0FDF4;
        border: 1px solid #BBF7D0;
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
    }
    .footer {
        background-color: #111827;
        color: #D1D5DB;
        padding: 3rem 2rem;
        text-align: center;
        margin-top: 3rem;
    }
    .footer-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom: 0.5rem;
    }
    h3 {
        color: #111827;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    </style>
""", unsafe_allow_html=True)

# Initialize session state for email submission
if 'email_submitted' not in st.session_state:
    st.session_state.email_submitted = False

# Hero Section
st.markdown("""
    <div class="hero-section">
        <h1 class="hero-title">
            Know What You Can Build
        </h1>
        <h1 class="hero-subtitle">
            Before You Buy
        </h1>
        <p class="hero-description">
            Discover your property's true potential in Culpeper, VA.
            Understand zoning, setbacks, and building restrictions before you invest.
        </p>
    </div>
""", unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# Problem Section
st.markdown('<h2 class="section-title">The Problem</h2>', unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 6, 1])
with col2:
    st.markdown("""
        <div class="problem-box">
            <h3>Buying land without knowing what you can build is risky</h3>
            <p>Many homeowners discover too late that their dream addition, ADU, or workshop
            violates setback requirements or zoning restrictions.</p>
        </div>
    """, unsafe_allow_html=True)

    st.markdown("""
        <div class="problem-box">
            <h3>Navigating county regulations is overwhelming</h3>
            <p>Zoning codes, setback rules, and building restrictions are buried in complex
            documents that are difficult to understand without professional help.</p>
        </div>
    """, unsafe_allow_html=True)

    st.markdown("""
        <div class="problem-box">
            <h3>Hiring professionals is expensive</h3>
            <p>Getting a survey or consulting with a land use attorney can cost thousands,
            even before you know if the property meets your needs.</p>
        </div>
    """, unsafe_allow_html=True)

st.markdown("<br><br>", unsafe_allow_html=True)

# Solution Section
st.markdown("""
    <div style="background-color: #EFF6FF; padding: 3rem 1rem; border-radius: 10px; margin-bottom: 2rem;">
        <h2 class="section-title">The Solution</h2>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 6, 1])
with col2:
    st.markdown("""
        <div class="solution-intro">
            <p class="solution-intro-text">
                PropCode gives you instant clarity on what you can build on any property
                in Culpeper, VA — before you commit.
            </p>
        </div>
    """, unsafe_allow_html=True)

    st.markdown("""
        <div class="solution-box">
            <h3>✓ Instant Property Reports</h3>
            <p>Get a comprehensive report showing zoning, setbacks, and building restrictions
            for any Culpeper property in minutes.</p>
        </div>
    """, unsafe_allow_html=True)

    st.markdown("""
        <div class="solution-box">
            <h3>✓ Clear, Visual Breakdowns</h3>
            <p>See your buildable area mapped out visually, with setback lines and restrictions
            clearly marked. No legal jargon required.</p>
        </div>
    """, unsafe_allow_html=True)

    st.markdown("""
        <div class="solution-box">
            <h3>✓ Make Informed Decisions</h3>
            <p>Know exactly what you can build before making an offer, scheduling a showing,
            or spending money on professional consultations.</p>
        </div>
    """, unsafe_allow_html=True)

st.markdown("</div>", unsafe_allow_html=True)

st.markdown("<br><br>", unsafe_allow_html=True)

# Email Capture Section
st.markdown("""
    <div class="waitlist-container">
        <div class="waitlist-box">
            <h2 style="font-size: 2.5rem; font-weight: bold; text-align: center; margin-bottom: 1rem;">
                Join the Waitlist
            </h2>
            <p style="font-size: 1.125rem; color: #4B5563; text-align: center; margin-bottom: 2rem;">
                Be the first to know when PropCode launches. Get early access and exclusive pricing.
            </p>
""", unsafe_allow_html=True)

if st.session_state.email_submitted:
    st.markdown("""
        <div class="success-box">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">You're on the list!</h3>
            <p style="color: #374151;">We'll be in touch soon with updates on our launch.</p>
        </div>
    """, unsafe_allow_html=True)
else:
    with st.form("waitlist_form"):
        email = st.text_input(
            "Email Address",
            placeholder="your@email.com",
            label_visibility="visible"
        )
        submit_button = st.form_submit_button(
            "Get Early Access",
            use_container_width=True
        )

        if submit_button:
            if email:
                # TODO: Add email submission logic
                st.session_state.email_submitted = True
                st.rerun()
            else:
                st.error("Please enter a valid email address")

        st.markdown("""
            <p style="text-align: center; font-size: 0.875rem; color: #6B7280; margin-top: 1rem;">
                We respect your privacy. Unsubscribe at any time.
            </p>
        """, unsafe_allow_html=True)

st.markdown("</div></div>", unsafe_allow_html=True)

# Footer
st.markdown(f"""
    <div class="footer">
        <h3 class="footer-title">PropCode</h3>
        <p style="color: #9CA3AF; margin-bottom: 1rem;">
            Helping Culpeper, VA homeowners understand their property's potential
        </p>
        <p style="font-size: 0.875rem; color: #6B7280;">
            &copy; {datetime.now().year} PropCode. All rights reserved.
        </p>
    </div>
""", unsafe_allow_html=True)
