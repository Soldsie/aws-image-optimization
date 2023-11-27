#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';

const app = new cdk.App();

const appStagName = app.node.tryGetContext('STAGE_NAME');

new ImageOptimizationStack(app, `ImgTransStack${!appStagName ? '' : '-' + appStagName}`, {

});
