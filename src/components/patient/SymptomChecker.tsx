import React, { useState } from 'react';
import { Camera, Mic, MicOff, Upload } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';

interface SymptomData {
  description: string;
  duration: string;
  severity: 'mild' | 'moderate' | 'severe';
  images: File[];
  voiceRecording?: Blob;
}

interface TriageResult {
  recommendation: 'home-care' | 'chw-visit' | 'doctor-consult' | 'emergency';
  confidence: number;
  reasoning: string;
}

export function SymptomChecker() {
  const { t } = useI18n();
  const [symptoms, setSymptoms] = useState<SymptomData>({
    description: '',
    duration: '',
    severity: 'mild',
    images: [],
  });
  const [isRecording, setIsRecording] = useState(false);
  const [triage, setTriage] = useState<TriageResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSymptoms(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 3) // Max 3 images
    }));
  };

  const handleVoiceToggle = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsRecording(true);
        // Voice recording implementation would go here
      } catch (error) {
        console.error('Microphone access denied:', error);
      }
    } else {
      setIsRecording(false);
      // Stop recording implementation
    }
  };

  const analyzeSymptoms = async () => {
    setIsAnalyzing(true);
    
    // Mock AI analysis - in real app this would call your ML service
    setTimeout(() => {
      const mockTriage: TriageResult = {
        recommendation: symptoms.severity === 'severe' ? 'emergency' : 
                      symptoms.severity === 'moderate' ? 'doctor-consult' : 'chw-visit',
        confidence: 0.85,
        reasoning: 'Based on the symptoms described and severity level, this recommendation provides the most appropriate level of care.'
      };
      
      setTriage(mockTriage);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getTriageBadgeClass = (recommendation: string) => {
    switch (recommendation) {
      case 'home-care': return 'triage-badge home-care';
      case 'chw-visit': return 'triage-badge chw-visit';
      case 'doctor-consult': return 'triage-badge doctor-consult';
      case 'emergency': return 'triage-badge emergency';
      default: return 'triage-badge';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            AI Symptom Checker
          </h2>
          <p className="text-sm text-muted-foreground">
            Describe your symptoms to get personalized health guidance
          </p>

          <div className="space-y-4">
            <div className="form-field">
              <label className="form-label">
                {t.symptoms}
              </label>
              <Textarea
                className="form-input min-h-24"
                placeholder="Describe your symptoms in detail..."
                value={symptoms.description}
                onChange={(e) => setSymptoms(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-field">
                <label className="form-label">
                  {t.duration}
                </label>
                <select
                  className="form-input"
                  value={symptoms.duration}
                  onChange={(e) => setSymptoms(prev => ({ ...prev, duration: e.target.value }))}
                >
                  <option value="">Select duration</option>
                  <option value="hours">Few hours</option>
                  <option value="1-2days">1-2 days</option>
                  <option value="week">About a week</option>
                  <option value="longer">More than a week</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">
                  {t.severity}
                </label>
                <select
                  className="form-input"
                  value={symptoms.severity}
                  onChange={(e) => setSymptoms(prev => ({ ...prev, severity: e.target.value as any }))}
                >
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="sr-only"
                  id="image-upload"
                />
                <Button
                  variant="outline"
                  size="touch"
                  asChild
                >
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Camera className="h-4 w-4" />
                    Add Photos
                  </label>
                </Button>
              </div>

              <Button
                variant="outline"
                size="touch"
                onClick={handleVoiceToggle}
                className={isRecording ? 'bg-emergency/10 border-emergency text-emergency' : ''}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                {isRecording ? 'Stop Recording' : 'Voice Note'}
              </Button>
            </div>

            {symptoms.images.length > 0 && (
              <div className="space-y-2">
                <label className="form-label">Uploaded Images:</label>
                <div className="flex flex-wrap gap-2">
                  {symptoms.images.map((image, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Upload className="h-4 w-4" />
                      {image.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant="hero"
              size="touch-lg"
              onClick={analyzeSymptoms}
              disabled={!symptoms.description || isAnalyzing}
              loading={isAnalyzing}
              className="w-full"
            >
              Analyze Symptoms
            </Button>
          </div>
        </div>
      </Card>

      {triage && (
        <Card className="card-elevated">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Health Recommendation
            </h3>
            
            <div className="flex items-center gap-3">
              <Badge className={getTriageBadgeClass(triage.recommendation)}>
                {(t as any)[triage.recommendation.replace('-', '')] || triage.recommendation}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {Math.round(triage.confidence * 100)}% confidence
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              {triage.reasoning}
            </p>

            <div className="flex gap-3">
              <Button variant="hero" size="touch">
                {t.bookConsult}
              </Button>
              <Button variant="outline" size="touch">
                Get Second Opinion
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}