---
title: Documentation
sidebar_position: 1
description: Explore Tetragon documentation by topic.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Browse the documentation by topic. Each section keeps the detailed reference pages and examples available through the sidebar as well as these shortcuts.

<DocCardGrid>
  <DocCard title="Concepts" description="Understand Tetragon events, tracing policies, enforcement, and runtime hooks." to="/docs/docs/concepts" />
  <DocCard title="Contribution Guide" description="Set up a development environment and contribute code and documentation." to="/docs/docs/contribution-guide" />
  <DocCard title="Getting Started" description="Install Tetragon and begin observing executions, files, networks, and enforcement." to="/docs/docs/getting-started" />
  <DocCard title="Installation" description="Configure and run Tetragon with Kubernetes, containers, packages, and runtime hooks." to="/docs/docs/installation" />
  <DocCard title="Reference" description="Find daemon configuration, Helm values, gRPC APIs, metrics, and tracing policy details." to="/docs/docs/reference" />
  <DocCard title="Troubleshooting" description="Diagnose BPF program, gRPC, logging, and system dump issues." to="/docs/docs/troubleshooting" />
  <DocCard title="Use Cases" description="Explore practical monitoring workflows for hosts, processes, files, and security profiles." to="/docs/docs/use-cases" />
</DocCardGrid>
