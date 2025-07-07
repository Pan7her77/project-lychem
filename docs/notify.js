#!/usr/bin/env node
import notifier from 'node-notifier';
import { getWisdom } from './generator.js';

const { intro, quote, prompt } = getWisdom();

notifier.notify({
  title: intro,
  message: `${quote}\n\n${prompt}`,
  timeout: 10            // seconds
});
