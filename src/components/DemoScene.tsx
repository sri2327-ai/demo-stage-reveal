
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { FigmaPatientEngagementIllustration } from './FigmaPatientEngagementIllustration';
import { FigmaAIMedicalScribeIllustration } from './FigmaAIMedicalScribeIllustration';
import { 
  MessageCircle, 
  Calendar, 
  FileText, 
  BellRing, 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  User, 
  Database, 
  Shield, 
  ClipboardCheck, 
  ArrowRight,
  Settings, 
  CalendarDays, 
  ClipboardList, 
  Mic, 
  Stethoscope, 
  Server
} from 'lucide-react';
import type { DemoStage } from '../types/demo';
