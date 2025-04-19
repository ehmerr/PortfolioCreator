import React from "react";
import MarkdownPreview from "./MarkdownPreview";

const AVATAR_OPTIONS = [
  // DiceBear Micah avatars (modern, always online)
  'https://api.dicebear.com/7.x/micah/svg?seed=ahmar1',
  'https://api.dicebear.com/7.x/micah/svg?seed=ahmar2',
  'https://api.dicebear.com/7.x/micah/svg?seed=ahmar3',
  'https://api.dicebear.com/7.x/micah/svg?seed=ahmar4',
  'https://api.dicebear.com/7.x/micah/svg?seed=ahmar5',
  // DiceBear Adventurer avatars (fun, always online)
  'https://api.dicebear.com/7.x/adventurer/svg?seed=ava1',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=ava2',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=ava3',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=ava4',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=ava5'
];

function AboutForm({ about, setAbout }) {
  return (
    <div style={{
      position: 'relative',
      background: 'rgba(36, 28, 41, 0.82)',
      borderRadius: 26,
      boxShadow: '0 8px 40px #00000044',
      padding: '2.6rem 1.7rem 2.5rem 1.7rem',
      maxWidth: 520,
      margin: '2.5rem auto',
      border: '2.5px solid transparent',
      transition: 'box-shadow 0.22s',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      animation: 'fadeInCard 0.9s cubic-bezier(.39,.58,.57,1.15)',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <style>{`
        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(30px) scale(.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .floating-label {
          position: relative;
          margin-bottom: 1.3rem;
        }
        .floating-label input:focus + label,
        .floating-label input:not(:placeholder-shown) + label {
          top: -14px;
          left: 7px;
          font-size: 0.91rem;
          color: #ff2d2d;
          background: rgba(36,28,41,0.89);
          padding: 0 5px;
          border-radius: 4px;
          letter-spacing: 0.02em;
          font-weight: 600;
          box-shadow: 0 2px 8px #ff2d2d22;
        }
        .floating-label label {
          position: absolute;
          left: 16px;
          top: 12px;
          color: #aaa;
          font-size: 1.04rem;
          pointer-events: none;
          transition: all 0.18s cubic-bezier(.4,1.2,.5,1.0);
          background: transparent;
        }
        .avatar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(58px, 1fr));
          gap: 1.15rem;
          margin: 0.5rem 0 0 0;
          box-shadow: 0 4px 22px #0002;
          padding: 1rem 0.2rem 0.5rem 0.2rem;
          border-radius: 18px;
          background: rgba(48,38,53,0.13);
        }
        @media (max-width: 600px) {
          .avatar-grid {
            grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
            gap: 0.7rem;
            padding: 0.7rem 0.1rem 0.3rem 0.1rem;
          }
        }
        .avatar-img {
          opacity: 0;
          animation: fadeInAvatar 0.7s ease-in forwards;
        }
        @keyframes fadeInAvatar {
          from { opacity: 0; transform: scale(.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .avatar-pop {
          animation: popAvatar 0.33s cubic-bezier(.4,2,.5,.8);
        }
        @keyframes popAvatar {
          0% { transform: scale(1); }
          60% { transform: scale(1.18); }
          100% { transform: scale(1.0); }
        }
        .about-divider {
          width: 100%;
          height: 2.5px;
          border: none;
          margin: 2.2rem 0 1.1rem 0;
          background: linear-gradient(90deg, #ff2d2d 0%, #6e37ff 50%, #2ddcff 100%);
          opacity: 0.45;
          border-radius: 2px;
        }
        .save-btn {
          margin-top: 2.2rem;
          width: 100%;
          padding: 0.9rem 0;
          font-size: 1.15rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ff2d2d 0%, #6e37ff 60%, #2ddcff 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 18px #0002;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.18s, box-shadow 0.18s, transform 0.13s;
        }
        .save-btn:active {
          transform: scale(0.97);
          background: linear-gradient(90deg, #ff2d2d 0%, #2ddcff 100%);
        }
        .save-btn:focus {
          outline: 2px solid #2ddcff;
        }
        .save-btn .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.5s linear;
          background: rgba(255,255,255,0.4);
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(3.5);
            opacity: 0;
          }
        }
      `}</style>
      {/* Animated gradient border overlay */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          borderRadius: 30,
          zIndex: 2,
          border: '3px solid transparent',
          background: 'conic-gradient(from 160deg at 50% 50%, #ff2d2d 0%, #6e37ff 40%, #2ddcff 70%, #ff2d2d 100%)',
          opacity: 0.22,
          filter: 'blur(6px)',
          animation: 'spinGradient 7s linear infinite',
          animation: 'spinGradient 7s linear infinite',
        }}
      />
      {/* User icon */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-0.5rem' }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 8px #ff2d2d33)' }}>
          <circle cx="24" cy="24" r="24" fill="#2ddcff" fillOpacity="0.13" />
          <circle cx="24" cy="19" r="8" fill="#ff2d2d" fillOpacity="0.9" />
          <ellipse cx="24" cy="34" rx="12" ry="7" fill="#6e37ff" fillOpacity="0.25" />
        </svg>
      </div>
      <h3 style={{ color: '#ff2d2d', fontWeight: 700, marginBottom: '1.6rem', letterSpacing: 0.7, fontSize: '2.1rem', textShadow: '0 2px 12px #000a', textAlign: 'center' }}>About You</h3>
      <div className="floating-label">
        <input
          type="text"
          placeholder=" "
          value={about.name}
          onChange={e => setAbout({ ...about, name: e.target.value })}
          style={{
            width: '100%',
            padding: '0.7rem 1rem',
            fontSize: '1.08rem',
            borderRadius: 8,
            border: '1.5px solid #333',
            background: '#18171a',
            color: '#fff',
            outline: 'none',
            boxShadow: '0 1px 6px #00000011',
            transition: 'border 0.2s, box-shadow 0.2s',
          }}
          onFocus={e => e.target.style.border = '1.5px solid #ff2d2d'}
          onBlur={e => e.target.style.border = '1.5px solid #333'}
          required
        />
        <label>Your Name</label>
      </div>
      <label htmlFor="bio" style={{ color: '#aaa', fontSize: '1rem', marginBottom: 4, display: 'block' }}>Short Bio</label>
      <textarea
        id="bio"
        placeholder="Write a short bio about yourself..."
        value={about.bio}
        onChange={e => setAbout({ ...about, bio: e.target.value })}
        style={{
          width: '100%',
          minHeight: 72,
          maxHeight: 180,
          fontSize: '1.09rem',
          fontFamily: 'inherit',
          border: '1.5px solid #333',
          background: '#18171a',
          color: '#fff',
          marginBottom: '1.4rem',
          outline: 'none',
          boxShadow: '0 1px 6px #00000011',
          resize: 'vertical',
          transition: 'border 0.2s, box-shadow 0.2s',
        }}
        onFocus={e => e.target.style.border = '1.5px solid #ff2d2d'}
        onBlur={e => e.target.style.border = '1.5px solid #333'}
      />
      <div style={{margin: '0.6rem 0 0.3rem 0', fontWeight: 500, color: '#6e37ff', fontSize: '1.01rem'}}>Markdown Preview</div>
      {/* Live Markdown Preview */}
      <MarkdownPreview value={about.bio} />
      <hr className="about-divider" aria-hidden="true" />
      {/* Social Links Section */}
      <section style={{ margin: '2.1rem 0 1.6rem 0', padding: '1.3rem 1.1rem', background: 'rgba(36,28,41,0.19)', borderRadius: 16, boxShadow: '0 3px 18px #0001', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ fontWeight: 700, color: '#6e37ff', marginBottom: '0.18rem', fontSize: '1.12rem', textAlign: 'center', letterSpacing: '0.01em' }}>Social Links</div>
        <div style={{ color: '#b9b9c2', fontSize: '0.95rem', textAlign: 'center', marginBottom: '1.1rem' }}>Let others connect with you</div>
        <div className="social-links-grid" style={{ display: 'grid', gap: '1.05rem', gridTemplateColumns: '1fr', maxWidth: 370, margin: '0 auto' }}>
          {[
            {
              key: 'linkedin',
              name: 'LinkedIn',
              color: '#0077B5',
              placeholder: 'LinkedIn URL',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0077B5"/>
                  <path d="M7.1 9.6H4.9V19.1H7.1V9.6ZM6 8.5C6.7 8.5 7.2 7.9 7.2 7.3C7.2 6.7 6.7 6.1 6 6.1C5.3 6.1 4.8 6.7 4.8 7.3C4.8 7.9 5.3 8.5 6 8.5ZM19.1 13.7C19.1 11.2 17.6 10.1 15.8 10.1C14.7 10.1 14 10.7 13.7 11.2V10.3H11.5V19.1H13.7V14.3C13.7 13.2 14.3 12.7 15.1 12.7C15.9 12.7 16.3 13.3 16.3 14.4V19.1H18.5V14.3C18.5 12.7 17.9 11.6 16.6 11.6C15.8 11.6 15.3 12.1 15.1 12.6H15V11.7H13.7V19.1H15.9V14.3C15.9 13.2 16.5 12.7 17.3 12.7C18.1 12.7 18.5 13.3 18.5 14.4V19.1H19.1V13.7Z" fill="#fff"/>
                </svg>
              )
            },
            {
              key: 'github',
              name: 'GitHub',
              color: '#181717',
              placeholder: 'GitHub URL',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#181717"/>
                  <path d="M12 5.3c-3.7 0-6.7 3-6.7 6.7 0 3 2 5.5 4.7 6.4.3.1.4-.1.4-.3v-1.3c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.6.7 2 .5.1-.4.2-.7.4-.8-1.5-.2-3.1-.7-3.1-3.2 0-.7.2-1.2.6-1.7 0-.2-.2-.8.1-1.7 0 0 .5-.2 1.7.7.5-.1 1-.2 1.5-.2.5 0 1 .1 1.5.2 1.2-.9 1.7-.7 1.7-.7.3.9.1 1.5.1 1.7.3.5.6 1 .6 1.7 0 2.5-1.6 3-3.1 3.2.2.2.4.5.4 1v1.5c0 .2.1.4.4.3 2.7-.9 4.7-3.4 4.7-6.4 0-3.7-3-6.7-6.7-6.7z" fill="#fff"/>
                </svg>
              )
            },
            {
              key: 'twitter',
              name: 'Twitter',
              color: '#1DA1F2',
              placeholder: 'Twitter URL',
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#1DA1F2"/>
                  <path d="M19.4 8.3c-.5.2-1 .4-1.6.4.6-.4 1-.9 1.2-1.5-.5.3-1.1.6-1.7.7-.5-.5-1.3-.9-2.1-.9-1.6 0-2.8 1.5-2.4 3.1-2-.1-3.7-1-4.9-2.4-.2.4-.3.9-.3 1.4 0 1 .5 1.8 1.3 2.3-.5 0-.9-.1-1.3-.4v.1c0 1.4 1 2.5 2.3 2.8-.2.1-.4.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.7 2.4 1.7-1 .8-2.3 1.2-3.6 1.2-.2 0-.4 0-.6-.1 1.3.8 2.8 1.3 4.4 1.3 5.3 0 8.2-4.4 8.2-8.2v-.4c.5-.4 1-.9 1.3-1.5z" fill="#fff"/>
                </svg>
              )
            }
          ].map(({ key, name, color, placeholder, icon }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <label htmlFor={`social-${key}`} style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>{name}</label>
              <span style={{ width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: color + '22', boxShadow: `0 1px 8px ${color}22`, marginRight: 6 }} title={name}>
                {icon}
              </span>
              <input
                id={`social-${key}`}
                type="url"
                placeholder={placeholder}
                value={about.social?.[key] || ''}
                onChange={e => setAbout({ ...about, social: { ...about.social, [key]: e.target.value } })}
                style={{ flex: 1, padding: '0.57rem 1rem', borderRadius: 9, border: '1.5px solid #333', background: '#18171a', color: '#e3e3e3', fontSize: '1.04rem', boxShadow: '0 1px 8px #0001', transition: 'border 0.18s, box-shadow 0.18s' }}
                autoComplete="off"
                onFocus={e => e.target.style.border = `1.5px solid ${color}`}
                onBlur={e => e.target.style.border = '1.5px solid #333'}
              />
            </div>
          ))}
        </div>
      </section>
      <div style={{ margin: '1.5rem 0 0.5rem 0' }}>
        <div style={{ fontWeight: 600, color: '#ff2d2d', marginBottom: '0.7rem', fontSize: '1.07rem', textAlign: 'center' }}>Select an Avatar:</div>
        <div className="avatar-grid">
          {AVATAR_OPTIONS.map((url, idx) => (
            <div key={url} style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={url}
                alt={`Avatar ${idx + 1}`}
                title={about.avatar === url ? 'Selected' : 'Click to select'}
                className={`avatar-img${about.avatar === url ? ' avatar-pop' : ''}`}
                style={{
                  width: 58,
                  height: 58,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: about.avatar === url ? '3px solid #ff2d2d' : '2px solid #444',
                  boxShadow: about.avatar === url ? '0 2px 16px #ff2d2d55' : '0 1px 6px #222',
                  cursor: 'pointer',
                  transition: 'border 0.22s, box-shadow 0.22s, transform 0.18s',
                  background: '#292929',
                  opacity: about.avatar === url ? 1 : 0.85,
                  outline: about.avatar === url ? '2px solid #ff2d2d99' : 'none',
                  transform: about.avatar === url ? 'scale(1.08)' : 'scale(1.0)',
                  filter: about.avatar === url ? 'drop-shadow(0 0 8px #ff2d2d44)' : 'none',
                }}
                onClick={() => setAbout({ ...about, avatar: url })}
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter') setAbout({ ...about, avatar: url }); }}
                onMouseOver={e => e.currentTarget.style.boxShadow = '0 2px 20px #ff2d2d33'}
                onMouseOut={e => e.currentTarget.style.boxShadow = about.avatar === url ? '0 2px 16px #ff2d2d55' : '0 1px 6px #222'}
              />
              {about.avatar === url && (
                <span style={{
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ff2d2d',
                  color: '#fff',
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  padding: '2px 8px',
                  boxShadow: '0 2px 8px #0003',
                  fontWeight: 500,
                  letterSpacing: 0.2,
                  zIndex: 2,
                  pointerEvents: 'none',
                }}>Selected</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="save-btn" type="button" aria-label="Save" onClick={e => {
        // Micro-interaction: ripple effect
        const btn = e.currentTarget;
        const circle = document.createElement('span');
        circle.className = 'ripple';
        circle.style.left = `${e.nativeEvent.offsetX}px`;
        circle.style.top = `${e.nativeEvent.offsetY}px`;
        circle.style.width = circle.style.height = Math.max(btn.offsetWidth, btn.offsetHeight) + 'px';
        btn.appendChild(circle);
        setTimeout(() => circle.remove(), 520);
      }}>
        Save
      </button>
    </div>
  );
}

export default AboutForm;
