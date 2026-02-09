'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SiteConfig {
  [key: string]: any;
}

interface ImageUploadState {
  uploading: boolean;
  error: string;
}

export default function AdminDashboard() {
  const [content, setContent] = useState<SiteConfig>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeSection, setActiveSection] = useState('navbar');
  const [imageUpload, setImageUpload] = useState<ImageUploadState>({ uploading: false, error: '' });
  const router = useRouter();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/admin/content');
      if (response.status === 401) {
        router.push('/admin');
        return;
      }
      const data = await response.json();
      setContent(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch content:', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage('✓ Content saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('✗ Failed to save content');
      }
    } catch (error) {
      setMessage('✗ An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    document.cookie = 'adminToken=; path=/; max-age=0';
    router.push('/admin');
  };

  const updateField = (section: string, field: string, value: any) => {
    setContent({
      ...content,
      [section]: {
        ...content[section],
        [field]: value,
      },
    });
  };

  const updateArrayItem = (section: string, field: string, index: number, key: string, value: any) => {
    const updatedArray = [...(content[section][field] || [])];
    if (!updatedArray[index]) {
      updatedArray[index] = {};
    }
    updatedArray[index][key] = value;
    updateField(section, field, updatedArray);
  };

  const addArrayItem = (section: string, field: string) => {
    const currentArray = content[section][field] || [];
    const newItem = getEmptyItemForField(field);
    updateField(section, field, [...currentArray, newItem]);
  };

  const removeArrayItem = (section: string, field: string, index: number) => {
    const updatedArray = content[section][field].filter((_: any, i: number) => i !== index);
    updateField(section, field, updatedArray);
  };

  const getEmptyItemForField = (field: string): any => {
    if (field === 'links') return { label: '', href: '' };
    if (field === 'features') return '';
    if (field === 'featureList') return { icon: '', text: '' };
    if (field === 'stats') return { number: '', label: '' };
    if (field === 'members') return { name: '', role: '', image: '', social: { facebook: '', twitter: '', linkedin: '', instagram: '' } };
    return {};
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string, field: string, index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUpload({ uploading: true, error: '' });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Add small delay to ensure file is fully written
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (index !== undefined) {
          updateArrayItem(section, field, index, 'image', data.url);
        } else {
          updateField(section, field, data.url);
        }
        setImageUpload({ uploading: false, error: '' });
      } else {
        setImageUpload({ uploading: false, error: data.error || 'Upload failed' });
      }
    } catch (error) {
      setImageUpload({ uploading: false, error: 'Failed to upload image' });
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      }}>
        <p style={{ color: 'white', fontSize: '1.2rem' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      padding: '20px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <h1 style={{ color: '#333', margin: 0 }}>Content Manager</h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Logout
          </button>
        </div>

        {/* Message */}
        {message && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            background: message.includes('✓') ? '#d4edda' : '#f8d7da',
            color: message.includes('✓') ? '#155724' : '#721c24',
            borderRadius: '4px',
            textAlign: 'center',
          }}>
            {message}
          </div>
        )}

        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Sidebar */}
          <div style={{
            width: '200px',
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            height: 'fit-content',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}>
            <h3 style={{ color: '#333', marginTop: 0 }}>Sections</h3>
            {Object.keys(content).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px',
                  marginBottom: '8px',
                  background: activeSection === section ? '#1E88E5' : '#f0f0f0',
                  color: activeSection === section ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: activeSection === section ? '600' : '400',
                  textTransform: 'capitalize',
                  fontSize: '0.9rem',
                }}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Content Editor */}
          <div style={{
            flex: 1,
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            overflowY: 'auto',
            maxHeight: '80vh',
          }}>
            <h2 style={{ color: '#333', textTransform: 'capitalize', marginTop: 0 }}>
              {activeSection} Section
            </h2>

            <div style={{ marginBottom: '30px' }}>
              {content[activeSection] && Object.entries(content[activeSection]).map(([field, value]) => (
                <div key={field} style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '10px',
                    color: '#333',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    fontSize: '0.95rem',
                  }}>
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>

                  {Array.isArray(value) ? (
                    <div>
                      {typeof value[0] === 'string' ? (
                        // Simple array of strings
                        <div>
                          {value.map((item: string, index: number) => (
                            <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => {
                                  const newArray = [...value];
                                  newArray[index] = e.target.value;
                                  updateField(activeSection, field, newArray);
                                }}
                                style={{
                                  flex: 1,
                                  padding: '8px',
                                  border: '1px solid #ddd',
                                  borderRadius: '4px',
                                  fontSize: '0.9rem',
                                  boxSizing: 'border-box',
                                }}
                              />
                              <button
                                onClick={() => removeArrayItem(activeSection, field, index)}
                                style={{
                                  padding: '8px 12px',
                                  background: '#dc3545',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  fontSize: '0.85rem',
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => addArrayItem(activeSection, field)}
                            style={{
                              marginTop: '8px',
                              padding: '8px 15px',
                              background: '#28a745',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                            }}
                          >
                            + Add Item
                          </button>
                        </div>
                      ) : (
                        // Array of objects
                        <div>
                          {value.map((item: any, index: number) => (
                            <div key={index} style={{
                              padding: '15px',
                              background: '#f9f9f9',
                              borderRadius: '4px',
                              marginBottom: '12px',
                              border: '1px solid #ddd',
                            }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{ fontWeight: '600', color: '#333', fontSize: '0.9rem' }}>
                                  Item {index + 1}
                                </span>
                                <button
                                  onClick={() => removeArrayItem(activeSection, field, index)}
                                  style={{
                                    padding: '6px 12px',
                                    background: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                              {Object.entries(item).map(([key, val]: [string, any]) => (
                                <div key={key} style={{ marginBottom: '10px' }}>
                                  <label style={{
                                    display: 'block',
                                    marginBottom: '4px',
                                    color: '#666',
                                    fontWeight: '500',
                                    fontSize: '0.85rem',
                                    textTransform: 'capitalize',
                                  }}>
                                    {key}
                                  </label>
                                  {key === 'image' || key.toLowerCase().includes('image') ? (
                                    <div>
                                      {val && typeof val === 'string' && (
                                        <div style={{ marginBottom: '8px' }}>
                                          <img
                                            src={val}
                                            alt="Preview"
                                            style={{
                                              maxWidth: '100%',
                                              maxHeight: '150px',
                                              borderRadius: '4px',
                                              border: '1px solid #ddd',
                                            }}
                                          />
                                        </div>
                                      )}
                                      <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, activeSection, field, index)}
                                        disabled={imageUpload.uploading}
                                        style={{
                                          width: '100%',
                                          padding: '8px',
                                          border: '1px solid #ddd',
                                          borderRadius: '4px',
                                          fontSize: '0.85rem',
                                          boxSizing: 'border-box',
                                          cursor: imageUpload.uploading ? 'not-allowed' : 'pointer',
                                        }}
                                      />
                                      <input
                                        type="text"
                                        value={typeof val === 'string' ? val : ''}
                                        onChange={(e) => updateArrayItem(activeSection, field, index, key, e.target.value)}
                                        placeholder="Or paste image URL"
                                        style={{
                                          width: '100%',
                                          padding: '8px',
                                          border: '1px solid #ddd',
                                          borderRadius: '4px',
                                          fontSize: '0.85rem',
                                          boxSizing: 'border-box',
                                          marginTop: '4px',
                                        }}
                                      />
                                      {imageUpload.uploading && <p style={{ fontSize: '0.8rem', color: '#666' }}>Uploading...</p>}
                                      {imageUpload.error && <p style={{ fontSize: '0.8rem', color: '#c33' }}>{imageUpload.error}</p>}
                                    </div>
                                  ) : key === 'social' ? (
                                    // Special handling for social links object
                                    <div style={{ background: '#fff', padding: '10px', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
                                      {(() => {
                                        let socialObj = val;
                                        // Parse if it's a string
                                        if (typeof val === 'string') {
                                          try {
                                            socialObj = JSON.parse(val);
                                          } catch {
                                            socialObj = {};
                                          }
                                        }
                                        return Object.entries(socialObj || {}).map(([socialKey, socialVal]: [string, any]) => (
                                          <div key={socialKey} style={{ marginBottom: '8px' }}>
                                            <label style={{
                                              display: 'block',
                                              marginBottom: '3px',
                                              color: '#555',
                                              fontWeight: '500',
                                              fontSize: '0.8rem',
                                              textTransform: 'capitalize',
                                            }}>
                                              {socialKey}
                                            </label>
                                            <input
                                              type="text"
                                              value={typeof socialVal === 'string' ? socialVal : ''}
                                              onChange={(e) => {
                                                const updatedArray = [...(content[activeSection][field] || [])];
                                                if (!updatedArray[index].social || typeof updatedArray[index].social === 'string') {
                                                  updatedArray[index].social = {};
                                                }
                                                updatedArray[index].social[socialKey] = e.target.value;
                                                updateField(activeSection, field, updatedArray);
                                              }}
                                              placeholder={`https://${socialKey}.com/username`}
                                              style={{
                                                width: '100%',
                                                padding: '6px',
                                                border: '1px solid #ddd',
                                                borderRadius: '3px',
                                                fontSize: '0.8rem',
                                                boxSizing: 'border-box',
                                              }}
                                            />
                                          </div>
                                        ));
                                      })()}
                                    </div>
                                  ) : (
                                    <input
                                      type="text"
                                      value={typeof val === 'string' ? val : JSON.stringify(val)}
                                      onChange={(e) => updateArrayItem(activeSection, field, index, key, e.target.value)}
                                      style={{
                                        width: '100%',
                                        padding: '8px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '0.85rem',
                                        boxSizing: 'border-box',
                                      }}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                          <button
                            onClick={() => addArrayItem(activeSection, field)}
                            style={{
                              marginTop: '10px',
                              padding: '8px 15px',
                              background: '#28a745',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                            }}
                          >
                            + Add {field}
                          </button>
                        </div>
                      )}
                    </div>
                  ) : typeof value === 'string' ? (
                    field.toLowerCase().includes('image') || field.toLowerCase().includes('img') ? (
                      <div>
                        {value && (
                          <div style={{ marginBottom: '12px' }}>
                            <img
                              src={value}
                              alt={field}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                              }}
                            />
                          </div>
                        )}
                        <div style={{ marginBottom: '10px' }}>
                          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: 0 }}>Upload Image</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, activeSection, field)}
                            disabled={imageUpload.uploading}
                            style={{
                              width: '100%',
                              padding: '8px',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              fontSize: '0.9rem',
                              boxSizing: 'border-box',
                              cursor: imageUpload.uploading ? 'not-allowed' : 'pointer',
                            }}
                          />
                          {imageUpload.uploading && <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Uploading...</p>}
                          {imageUpload.error && <p style={{ fontSize: '0.8rem', color: '#c33', marginTop: '4px' }}>{imageUpload.error}</p>}
                        </div>
                        <p style={{ color: '#999', fontSize: '0.8rem', marginBottom: '8px' }}>Or paste URL:</p>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateField(activeSection, field, e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    ) : value.length > 100 ? (
                      <textarea
                        value={value}
                        onChange={(e) => updateField(activeSection, field, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          minHeight: '100px',
                          boxSizing: 'border-box',
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => updateField(activeSection, field, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '0.9rem',
                          boxSizing: 'border-box',
                        }}
                      />
                    )
                  ) : typeof value === 'boolean' ? (
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => updateField(activeSection, field, e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    <textarea
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          updateField(activeSection, field, JSON.parse(e.target.value));
                        } catch (error) {
                          // Keep original on parse error
                        }
                      }}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontFamily: 'monospace',
                        minHeight: '100px',
                        boxSizing: 'border-box',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: '12px 30px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: saving ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
