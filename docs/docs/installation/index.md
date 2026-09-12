---
title: Installation
sidebar_position: 5
description: Install, configure, and verify Tetragon deployments.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Choose the deployment model that fits your environment, then configure and verify the running agent.

<DocCardGrid>
  <DocCard title="Configuration" description="Change Tetragon settings for Kubernetes, containers, and systemd." to="/docs/docs/installation/configuration" />
  <DocCard title="Container" description="Run Tetragon as a container with host kernel access." to="/docs/docs/installation/container" />
  <DocCard title="FAQ" description="Find answers to common installation and platform questions." to="/docs/docs/installation/faq" />
  <DocCard title="gRPC TLS / mTLS" description="Secure the optional gRPC listener with TLS or mutual TLS." to="/docs/docs/installation/grpc-tls" />
  <DocCard title="Kubernetes" description="Install Tetragon into a Kubernetes cluster with Helm." to="/docs/docs/installation/kubernetes" />
  <DocCard title="Metrics" description="Enable and expose Tetragon metrics for monitoring." to="/docs/docs/installation/metrics" />
  <DocCard title="Package" description="Install Tetragon as a host package or systemd service." to="/docs/docs/installation/package" />
  <DocCard title="Runtime Hooks" description="Install runtime hooks for container lifecycle integration." to="/docs/docs/installation/runtime-hooks" />
  <DocCard title="Tetra CLI" description="Connect to Tetragon and inspect events with the command-line client." to="/docs/docs/installation/tetra-cli" />
  <DocCard title="Verify" description="Check that an installation is healthy and reporting events." to="/docs/docs/installation/verify" />
</DocCardGrid>
