---
title: Reference
sidebar_position: 6
description: Detailed Tetragon configuration and API reference.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Use the reference pages when you need exact configuration fields, API types, Helm values, or tracing policy behavior.

<DocCardGrid>
  <DocCard title="Daemon Configuration" description="Find command-line flags and configuration precedence for the Tetragon daemon." to="/docs/docs/reference/daemon-configuration" />
  <DocCard title="gRPC API" description="Browse the event and service types exposed by Tetragon’s gRPC API." to="/docs/docs/reference/grpc-api" />
  <DocCard title="Helm Chart" description="Review the values and settings available in the Tetragon Helm chart." to="/docs/docs/reference/helm-chart" />
  <DocCard title="Metrics" description="Reference the metrics emitted by Tetragon." to="/docs/docs/reference/metrics" />
  <DocCard title="Tracing Policy" description="Reference the TracingPolicy custom resource and supported selectors." to="/docs/docs/reference/tracing-policy" />
</DocCardGrid>
